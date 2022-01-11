const axios=require('axios');
const dotenv = require('dotenv');
dotenv.config();
const tick =async()=>{
const results= await Promise.all([
    axios.get(`${process.env.API_BASE_URL}${process.env.API_TICKER_INFO}${process.env.TICKER_NAME}`),

])
const tickerPrice=results[0].data.lastPrice
console.log(tickerPrice);
}

const run =() =>{
    // const config={
    //     asset:'BTC',
    //     base:'USDT',
    //     allocation:0.1,
    //     spread:0.2,
    //     tickInterval:2000
    // };
    // const exchangeClient= new ccxt.binance({
    //     apiKey:process.env.API_ENV,
    //     secret:process.env.API_SECRET
    // });
    // fetchOrders();
    // setInterval(tick,config.tickInterval,config,exchangeClient);
}

const export fetchOrders= async()=>{
    const result=await axios.get(`${process.env.API_BASE_URL}${process.env.API_TICKER_INFO}${process.env.TICKER_NAME}`)
    console.log(result)
   return result
}
const cancelExistingOrders= async()=>{
    
}
const placeNewOrder= async()=>{
    
}
const isOrderFilled= async()=>{
    
}
// fetchOrders();
// cancelExistingOrders();
// placeNewOrder();
// isOrderFilled();