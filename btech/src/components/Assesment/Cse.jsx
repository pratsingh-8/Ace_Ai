import React from 'react'
import { Link, useLocation,Navigate, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './cse.css'

const Cse = () => {
  const navigate = useNavigate();
  const {
          register,
          handleSubmit,
          watch,
          reset,
          formState: { errors },
      } = useForm();

      const {state}= useLocation();


  const DATA = async (ele)=>{
    ele['department']=state['department']
    const depart=state['department']
    try{
      const rest ={
        method:'POST',
        headers:{'content-type':'application/json',},
        body:JSON.stringify(ele)
      }
      const respo = await fetch(`${import.meta.env.VITE_ASSES_URI}/ace-ai/asses`,rest)
      const res = await respo.json()
      const {arr}=res
      console.log(res)
      if(res){
        navigate('/test',{state:{arr,depa:depart}})
      }
    }catch(err){
      console.log(err.message);
    }
    
  }
  return (
    <div className='cse'>
      <Link to="/sidebar/assess">Go Back</Link>
      <h1>{state['department']}</h1>
      <form onSubmit={handleSubmit(DATA)}>
        <h3>Course</h3>
          {state['field'].map((ele)=>{
          return(<><input type="radio" {...register('course')} value={ele}/><span className='core'>{ele}</span></>);
        })}
        <h4>Level Of Question</h4>
        <input type="radio" {...register('Level')} value={'easy'}/>Easy
        <br />
        <input type="radio" {...register('Level')} value={'Medium'}/>Medium
        <br />
        <input type="radio" {...register('Level')} value={'Hard'}/>Hard
        <h4>Question Count</h4>
        <input type="radio" {...register('count')} value={'20'}/>20
        <br />
        {/* <input type="radio" {...register('count')} value={'40'}/>40
        <br />
        <input type="radio" {...register('count')} value={'50'}/>50 */}
        <button className='btn'>START TEST</button> 
      </form>
    </div>
  )
}

export default Cse
