import React, { useRef, useState } from 'react'
import logo2 from '../assets/logo2.jpeg'
import {useForm} from 'react-hook-form'
import '../ATS/Ats.css'

const Ats = () => {
    const [display,setDisplay] = useState(logo2)
    const [para,setPara] = useState(`Be Confident We'll Not Share Your Information`)
    const file = useRef();
    const {
            register,
            handleSubmit,
            watch,
            reset,
            formState: { errors },
        } = useForm();
    const submit = async (data)=>{

      setPara(`Genarating Your Result.....`) // render on calculating
      try{
        const formData = new FormData();

        formData.append('atsresume',data.userResume[0]);
        console.log(data)
        
        const url="http://localhost:3000/ace-ai/Ats"
        const rest={
          method:'POST',
          body:formData,
        }
        const result = await fetch(url,rest);
        setPara('Ready to See Your Score');
        const res = await result.json();
        const {cont}=res;
        console.log(cont);
      }catch(err){
        console.log(err.message);
      }
    }
  return (
    <div className='Ats'>
      <nav>
        <h1>ATS SCORE CHECKER</h1>
      </nav>
      <div className="below2">
        <div className="lt">
          <div className="upper">
            <h2>Is your Resume Good Enough?</h2>
            <p>Upload your resume and receive an AI-powered ATS compatibility report. Discover formatting issues, missing keywords,and personalized recommendations to increase your chances of getting shortlisted.</p>
          </div>
          <br/>
          <div className="lower">
            <h4>Upload Section</h4>
            <p>Drop your resume here or choose a file. PDF only. Max 2MB file size.</p>
            <form onSubmit={handleSubmit(submit)}>
              <input id="res" type="file" style={{display:'none'}} {...register('userResume',{required:true})} />
              <label htmlFor="res">click me to upload </label>
              <input type="submit"/>
            </form>
              
          </div>
        </div>
        <div className="rt">
          <div className="preview">
            <img src={logo2} alt="ACE AI" />
            <h2>AI RESUME ANALYSIS</h2>
            <p>
              {para}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ats
