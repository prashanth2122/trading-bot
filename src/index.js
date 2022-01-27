
const express=require('express')
const app =express();
const axios=require('axios');
const dotenv = require('dotenv');
const twilio = require('twilio');
dotenv.config();
app.set('view engine','hbs')

app.get('/voicecall',()=>{
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = new twilio(accountSid, authToken);
    client.calls
          .create({
             url: 'Trading View Alert Triggered',
             to: '+919912202122',
             from: '+19302122122'
           })
          .then(call => console.log(call.sid));
})

// app.get('/voicecall',(req,res)=>{

// })

app.listen(3000,()=>{
    console.log(`server listening at port 3000`)
})

const fetchPrice= async()=>{
    try{
    let isBought=false;
    let isSold=false;
    const result=await axios.get(`${process.env.API_BASE_URL}${process.env.API_TICKER_INFO}${process.env.TICKER_NAME}`)
    let currentPrice= Number(result.data.lastPrice);
    let buyPrice= Number(process.env.TICKER_BUY_PRICE)
    let sellPrice=Number(process.env.TICKER_SELL_PRICE)
    console.log(currentPrice)
    if(currentPrice  <= buyPrice){
        console.log(`BUY ${process.env.TICKER_NAME} at ${currentPrice}`)
    }
    if(currentPrice >= sellPrice){
        console.log(`Selling ${process.env.TICKER_NAME} at ${currentPrice}`)
    }
    }
    catch(err){
        console.log(err)
    }
}

// const activeOrders =async ()=>{

// },

// const cancelExistingOrders= async()=>{
    
// },
// const placeNewOrder= async()=>{
    
// },
// const isOrderFilled= async()=>{
    
// }

// fetchPrice();

// setInterval(fetchPrice,process.env.SET_INTERVAL);