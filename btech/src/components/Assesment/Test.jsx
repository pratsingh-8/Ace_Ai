import React, { useEffect, useState ,useRef} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import './test.css'

const Test = () => {
  const navigate = useNavigate()
    const {
              register,
              handleSubmit,
              watch,
              reset,
              formState: { errors },
          } = useForm();
    const {arr,depa} = useLocation().state
    const [ind,Setind] = useState(0);
    const [timer,Setimer]=useState(0);
    const [tf,settf]=useState(false)
    const quearr =arr.questions ? arr.questions:arr;
    const optionarr = arr.questions ? arr.questions[ind].options:arr[ind].options
    useEffect(()=>{
      const interval = setInterval(()=>{
        return Setimer(prev=>{
         if(prev>=300){
          // sub()
          clearInterval(interval)
          return prev
         } return prev+1
        });
      },1000)
      return ()=> clearInterval(interval)
    },[])
    const store= useRef([])
    const appen =(ques)=>{
      store.current.push({
        question:quearr[ind].question,
        studentResponse:ques[quearr[ind].question],
        CorrectAnswer:quearr[ind].answer
      })
      if(ind<quearr.length-1){
        Setind(prev=>prev+1);
      }
    }
    const sub = async ()=>{
      try{
        const array = store.current
        const rest={
          method:'POST',
          headers:{'content-type':'application/json',},
          body:JSON.stringify(array)
        }
        const result = await fetch(`${import.meta.env.VITE_ASSES_URI}/ace-ai/calc`,rest)
        const {newans}= await result.json()
        console.log(newans)
        if(newans){
          navigate("/Testresult", {state: {newans,depa: depa}})
        }
      }catch(err){
        console.log(err.message)
      }
      
    }
  return (
    <div className="test">
      <h1>{depa}</h1>
      <p1>TEST TIME: 300 Sec</p1>
      <div className="timer">
      {timer}
      </div>
      <div className="que">
        <span>Question{ind+1}</span><h3>{quearr[ind].question}</h3>
        <form onSubmit={handleSubmit(appen)}>
           <div className="options">
          {optionarr.map((option, i) => (
              <label className="option" key={option}>
                  <input
                      type="radio"
                      {...register(`${quearr[ind].question}`)}
                      value={option}
                  />
                  <span>{String.fromCharCode(65 + i)}.</span>
                  <span>{option}</span>
              </label>
          ))}
          </div>
          <div className="btn" style={{display:'flex',justifyContent:'space-between'}}>
            <button type='button' onClick={sub} className='su'>submit</button>
            <input id='sub' hidden type='submit'/>
            <label htmlFor="sub">Next</label>
            
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default Test
