
const express=require('express')
const app =express();
const axios=require('axios');
const dotenv = require('dotenv');
dotenv.config();
app.set('view engine','hbs')

app.get('',(req,res)=>{
    // setInterval(fetchOrders,3000)
    // console.log(res)
    res.render('index')
})

app.get('/dashboard',(req,res)=>{
    res.send("Dashboard Page")
})

app.listen(3000,()=>{
    console.log(`server listening at port 3000`)
})

const fetchOrders= async()=>{
    try{
    const result=await axios.get(`${process.env.API_BASE_URL}${process.env.API_TICKER_INFO}${process.env.TICKER_NAME}`)
    let currentPrice= Number(result.data.lastPrice);
    let buyPrice= Number(process.env.TICKER_BUY_PRICE)
    console.log(currentPrice)
    if(buyPrice  <= currentPrice){
        console.log("BUY")
    }
    // console.log(result.data)
    }
    catch(err){
        console.log(err)
    }
}
const cancelExistingOrders= async()=>{
    
}
const placeNewOrder= async()=>{
    
}
const isOrderFilled= async()=>{
    
}

fetchOrders();

// setInterval(fetchOrders,5000)









// run();
