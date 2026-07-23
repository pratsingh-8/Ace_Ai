import React from 'react'
import {useForm} from 'react-hook-form'
import './login.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const submit= async (data)=>{
       try{
            const url="http://localhost:3000/ace-ai/login"
            const rest={
                method:'POST',
                headers: {"Content-Type": "application/json",},
                body:JSON.stringify(data)
            }
            const respo = await fetch(url,rest);
            const res = await respo.json()    
            console.log(res) 
            if(respo.status==400){
                alert(res.message);
                return reset()

            }
            if(respo.status==404){
                alert(res.message)
                return reset();
            }
            if(respo.ok){
                localStorage.setItem("Token",res.Token)
                navigate('/sidebar');
            }


       }catch(err){
        console.log(err.message)
       }
    }
  return (
    <div>
        <div className="log">
            <form onSubmit={handleSubmit(submit)}>
                {/* <label>USER ID</label> */}
                <input type='email' placeholder='User Id' {...register('email',{required:"please enter email"})}/>
                {/* <label>password</label> */}
                <br/>
                <input type='password' placeholder='password' {...register('password',{required:"please enter password"})}/>
                <input type='submit'/>
                <a href=''>Forget Password ? Click Here</a>
                <button type='button' onClick={()=>{
                    navigate('/register')
                }}>Register user</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
