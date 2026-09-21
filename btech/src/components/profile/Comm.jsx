import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import '../profile/comm.css'
import { useRef } from 'react';
const Comm = () => {

    const token=localStorage.getItem('Token')
    const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
            } = useForm();
    useEffect(()=>{
      fetch(`${import.meta.env.VITE_ASSES_URI}/ace-ai/profetch`,{headers:{'authorization':`Bearer ${token}`}})
      .then((res)=>{return res.json()})
      .then(d1=>{reset(d1.data)})
    },[])
    const sub = async(data)=>{
      try{
        
        const rest = {
          method:'PATCH',
          headers:{'content-type':'application/json',"authorization":`Bearer ${token}`},
          body:JSON.stringify(data)
        }
        const r1 = await fetch(`${import.meta.env.VITE_ASSES_URI}/ace-ai/profile`,rest)
    }catch(err){
      console.log(err.message)
    }
  }
  return (
    <div className="profile">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit(sub)}>
        <div className="profile-section">
          <h2>Personal Information</h2>

          <label>Name</label>
          <input
              type="text"
              {...register('name')}
              placeholder="Your name"
          />

          <label>Email</label>
          <input
              type="email"
              {...register('email')}
              placeholder="Your email"
             
          />

          <label>Phone</label>
          <input
              type="tel"
              {...register('phone')}
              placeholder="Your phone number"
            
          />
        </div>

        <div className="profile-section">
          <h2>Skills</h2>

          <label>Technical Skills</label>
          <textarea
              {...register('MySkill')}
              placeholder="C++, Python, DSA, Machine Learning..."
              
          />
        </div>

        <div className="profile-section">
          <h2>Career Preferences</h2>

          <label>Preparing For</label>
          <input
              type="text"
              {...register('prepare_for')}
              placeholder="Software Engineer / AI-ML Engineer..."
             
          />
        </div>
        <div className="btn">
          <button>Edit</button>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default Comm;
