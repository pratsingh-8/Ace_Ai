    import React from 'react'
    import {useForm} from 'react-hook-form'
    import {Navigate, useNavigate} from 'react-router-dom'
    import logo2 from '../reg/logo2.jpeg'
    import '../reg/regi.css'
    const Regi = () => {
        const navigate = useNavigate();
        const {
                register,
                handleSubmit,
                watch,
                reset,
                formState: { errors },
            } = useForm();
        const add = async (d1)=>{
            try{
                const uri = "http://localhost:3000/ace-ai/register"
                const rest ={
                    method:"POST",
                    headers: {"Content-Type": "application/json",},
                    body:JSON.stringify(d1)
                }

                const respo = await fetch(uri,rest)
                const res=await respo.json()
                if(respo.status==400){
                    alert(res.message)
                }
                else{
                    alert('registered');
                    reset()
                    navigate('/login');
                }
            }catch(err){
                console.log(err.message)
            }
        }
    return (
        <div>
            <center><h1>Sign Up</h1></center>
            <div className="signup">
                <div className="box2">
                    <form className='fo1' onSubmit={handleSubmit(add)}>
                            <input type='text' placeholder='Name' {...register('name',{required:true})}></input>
                            <input type='email' placeholder='User Id' {...register('email',{required:true})}></input>
                            <input type='password' placeholder='Password' {...register('password',{required:true})}></input>
                            <button>Create Account</button>
                    </form>
                    <div className="rifo">
                        <img src={logo2} style={{borderRadius:'10px'}}></img>
                    </div>
                </div>
            </div>
        </div>
    )
    }

    export default Regi
