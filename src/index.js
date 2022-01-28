
const express=require('express')
const app =express();
const dotenv = require('dotenv');
const twilio = require('twilio');
dotenv.config();


app.get('',(req,res)=>{
    res.send("Welcome")
})

app.get('/voicecall',(req,res)=>{
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = new twilio(accountSid, authToken);
    try {
        client.calls
        .create({
           url: 'Trading View Alert Triggered',
           to: '+919912202122',
           from: '+19302122122'
         })
        .then((call)=>{
          console.log(call.sid)
          res.send("Calling")
        })
        
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})
app.listen(3000,()=>{
    console.log(`server listening at port 3000`)
})