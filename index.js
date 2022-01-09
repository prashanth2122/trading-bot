
require('dotenv').config;
// const ccxt=require('cctx');
const axios=require('axios');
const { config } = require('dotenv');



const baseurl = "https://api.wazirx.com"
const tickInfo="/sapi/v1/ticker/24hr?symbol="
const tickerName="usdtinr"

const tick =async()=>{
    console.log(process.env.API_KEY)
//     const {asset,base,spread,allocation}=config;
//     const market=`${asset}/${base}`;
//     const orders = await exchangeClient.fetchOpenOrders(market);
// orders.forEach(async order=>{
//     await  exchangeClient.cancelOrder(order.id)
// })

const results= await Promise.all([
    axios.get(`${baseurl}${tickInfo}${tickerName}`),

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
    tick(config);
    // setInterval(tick,config.tickInterval,config,exchangeClient);
}
run();