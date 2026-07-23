const puppeteer = require('puppeteer')
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
        <html>
        <head>
        <meta charset="UTF-8">
        <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            line-height: 1.6;
        }
        h1 {
            text-align: center;
        }
        h2 {
            color: #2c3e50;
            border-bottom: 1px solid #ccc;
        }
        </style>
        </head>
        <body>
        ${Resume}
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
module.exports={resume}