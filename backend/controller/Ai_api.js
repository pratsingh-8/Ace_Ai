const puppeteer = require('puppeteer')
const fs = require('fs')
const pd = require("pdf-parse");
const Groq = require('groq-sdk')
const apii = new Groq({
    apiKey: process.env.Apikey
});


const resume = async (req,res)=>{
    
    try{
        const pro = req.body;
        // console.log(pro);
        const completion = await apii.chat.completions.create({
        model: "llama-3.3-70b-versatile", // or another supported Groq model
        messages: [
            {role:`system`,content: `You are an expert resume writer. Generate a resume using ONLY the information provided in the user message — never invent, assume, or add facts, skills, dates, or achievements not present in the input.

                        Rules:
                        - Return ONLY a complete resume body as semantic HTML — no <html>, <head>, or <body> tags.
                        - Do not use Markdown or wrap the output in code fences.
                        - Do not use inline styles, tables, flexbox, or CSS grid — plain single-column HTML only, for ATS compatibility.
                        - Use <h1> for the name, <h2> for section headings, <h3> for job/project titles, <p> for paragraphs, <ul><li> for bullet points.
                        - Fix only grammatical errors (tense, agreement, articles) in the provided text — do not rephrase or add content beyond correcting grammar.
                        - Keep bullet points concise (one line each) to help fit content on a single page — but do not omit or shorten factual content to force this.
                        - Do not explain anything, just return the HTML.`

            },
            {
            role: "user",
            content:JSON.stringify(pro,null,2),
            },
        ],
        temperature: 0.4,
        max_tokens: 1200,});
        const Resume = completion.choices[0].message.content;
        const html =`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <style>
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
            }

            body{
                font-family: Arial, Helvetica, sans-serif;
                background:#ffffff;
                color:#222;
                padding:40px;
                line-height:1.5;
            }

            .container{
                max-width:800px;
                margin:auto;
            }

            .header{
                text-align:center;
                margin-bottom:20px;
            }

            .header h1{
                font-size:32px;
                font-weight:bold;
                color:#111827;
            }

            .header p{
                color:#555;
                font-size:14px;
                margin-top:5px;
            }

            .section{
                margin-top:22px;
            }

            .section-title{
                font-size:18px;
                color:#1e3a8a;
                font-weight:bold;
                border-bottom:2px solid #1e3a8a;
                padding-bottom:4px;
                margin-bottom:10px;
                text-transform:uppercase;
            }

            p{
                font-size:14px;
                margin-bottom:8px;
            }

            ul{
                margin-left:20px;
            }

            li{
                margin-bottom:6px;
                font-size:14px;
            }

            .skills{
                display:flex;
                flex-wrap:wrap;
                gap:8px;
            }

            .skill{
                background:#eef4ff;
                border:1px solid #d6e4ff;
                padding:4px 10px;
                border-radius:4px;
                font-size:13px;
            }

            .project-title,
            .company{
                font-weight:bold;
                font-size:15px;
            }

            .date{
                float:right;
                color:#666;
                font-size:13px;
            }

            hr{
                border:none;
                border-top:1px solid #ddd;
                margin:12px 0;
            }

            @page{
                size:A4;
                margin:20mm;
            }
            </style>

            </head>

            <body>

            <div class="container">

            ${Resume}

            </div>

            </body>
            </html>
        `;
        console.log(1)
        const browser = await puppeteer.launch({
            headless: false,
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
        });

        console.log("2")

        const pg = await browser.newPage();

        console.log("3")

        await pg.setContent(html);

        console.log("4")

        const pdf = await pg.pdf({
            format:"A4",
            printBackground:true
        })

        console.log("5")
        
        await browser.close();
        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=Resume.pdf",
        });
        res.send(pdf);
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:err.message
        })

    }
}
const Ats = async (req,res)=>{
    try{
        // console.log(req.file)
        const buffer = fs.readFileSync(req.file.path)
        const data = await pd(buffer);
        const datatext = data.text;
        const completion = await apii.chat.completions.create({
            model:"llama-3.3-70b-versatile",
            messages:[
                {
                    role:"system",
                    content:`You are an ATS Resume Analyzer.

                        Return ONLY valid JSON in this format:

                        {
                            "score": 0,
                            "summary": "",
                            "strengths": [],
                            "weaknesses": [],
                            "missing_keywords": [],
                            "suggestions": []
                        }`
                },{
                    role:"user",
                    content:datatext
                }
            ]
        })
        const result = await completion.choices[0].message.content
        const clean = result
                        .replace(/```json/g, "")
                        .replace(/```/g, "")
                        .trim();

        const respo = JSON.parse(clean);
        res.status(200).json({
            success:true,
            cont : respo
        })
        
    }
    catch(err){
        console.log(err.message)
    }
    
}
module.exports={resume,Ats}