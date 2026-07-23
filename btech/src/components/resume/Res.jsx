import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import '../resume/res.css'
const Res = () => {
    const {
            register,
            handleSubmit,
            watch,
            reset,
            formState: { errors },
        } = useForm();
        const resbuild = async (data)=>{
            try{
                console.log("button daba")
                const url="http://localhost:3000/ace-ai/resume"
                const rest={
                    method:'POST',
                    headers: {"Content-Type": "application/json",},
                    body:JSON.stringify(data)
                }
                const result = await fetch(url,rest)
                console.log(result.status, result.headers.get('content-type'))
                if(!result.ok){
                    throw new Error("aaya nhi sahi se");
                }
                const blob = await  result.blob()
                console.log(blob)
                const uri = window.URL.createObjectURL(blob);

                const a = document.createElement("a");
                a.href = uri;
                a.download = "resume.pdf";
                document.body.appendChild(a);
                a.click();
                a.remove();
                
                window.URL.revokeObjectURL(uri);
            }catch(err){
                console.log(err.message)
            }
        }
  return (
    <div className='resumePage'>
        <center><h1>Resume Builder</h1></center>
        <div className="f1">
            <form onSubmit={handleSubmit(resbuild)}>
                <label>Personal Information</label>
                <br/>
                <input type="text" placeholder='name*'{...register('name',{required:true})} />
                <input type="email" placeholder='email*'{...register('email',{required:true})}/>
                <input type="number" placeholder='number*'{...register('phone_no',{required:true})} />
                <input type="text" placeholder='city*'{...register('city',{required:true})} />
                <input type="text" placeholder='state*'{...register('state',{required:true})} />
                <input type='url' placeholder='linkedin link'{...register('linkedin_profile')} />
                <input type="url" placeholder='github link' {...register('github_link')} />
                <input type="url" placeholder='portfolio (optional)'{...register('portfolio')} />
                <br/>
                <label>Education</label><br/>
                <input type="text" placeholder='college*'{...register('colleg',{required:true})} />
                <input type="text" placeholder='degree*'{...register('degree',{degree:true})} />
                <input type="text" placeholder='Branch/specilization*'{...register('branch',{required:true})} />
                <input type="text" placeholder='cgpa/percentage*'{...register('cgpa',{required:true})} />
                <input type="date" placeholder='start*'{...register('start',{required:true})} />
                <input type="date" placeholder='end*'{...register('end',{required:true})} />
                <br/>
                <label>skill</label>
                <br/>
                <input type="text" placeholder='skill stack*'{...register('skill',{required:true})} />
                <br />
                <label>project</label>
                <br />
                <input type="text" placeholder='Name Of Project*'{...register('project',{required:true})} />
                <input type="text" placeholder='Description*'{...register('Descrription',{required:true})} />
                <input type='text' placeholder='Skill Stack Used*'{...register('Technology used',{required:true})} />
                <input type="url" placeholder='project link(optional)'{...register('project_link')} />
                <br />
                <input type='submit'></input>
            </form>
        </div>
    </div>
  )
}

export default Res
