// configuratiion 
console.log("hi")
var buy=0

let totalCap=5000;

const rate=document.getElementById("Rate")
const qty=document.getElementById("qty")
const trade=document.getElementById("trade")
const cap=document.getElementById("cap")
const sell=document.getElementById("sell")
const target=document.getElementById("target")
const stoploss=document.getElementById( "stoploss")


cap.innerHTML=totalCap

function updateCap(){
    let currCap=totalCap; 
    cap.innerHTML=currCap
}

function buyStock(stockprice,qty){
    buy=1
    totalPrice=stockprice*qty;
    totalCap-=totalPrice;
    updateCap();
}

function sellStock(stockprice,qty){
    buy=0
    totalPrice=stockprice*qty;
    totalCap+=totalPrice;
    updateCap();
}

function myStopFunction(myVar) {
    clearInterval(myVar);
  }



//   ----------------------------------------------------------------------------------------------------


trade.addEventListener("click", ()=>{
    // console.log("btn clicked")
    // console.log(rate.value)
    cap.innerHTML=totalCap
    getTrade()
    // buyStock(rate.value,qty.value);
    //scalpAlgo(rate.value,qty.value)
});





function scalpAlgo(stockName,buyqty){

    

    let buyvalue=stockName;

    buyStock(buyvalue,buyqty)

    let targetPrice=buyvalue*1.001;
    let stoplossPrice=buyvalue*0.999;

    target.innerText=targetPrice
    stoploss.innerText=stoplossPrice

    var set=setInterval(()=>{
           
            console.log(rate.value);
            // console.log(buyvalue)

            if(rate.value>=targetPrice && buy==1){
                console.log("target got hit")
                sellStock(rate.value,buyqty)
                myStopFunction(set);
            }
            if(rate.value<=stoplossPrice && buy==1){
                console.log("stop loss got hit")
                sellStock(rate.value,buyqty)
                myStopFunction(set)
            }
        
        },1000)
}




function getTrade(){
    //console.log(sma10.innerText)
    

    let tradeinterval=setInterval(()=>{
        
        
        if(sma10.innerText>sma20.innerText && buy==0 /*&& sma10p.innerText<sma20p.innerText*/){
            console.log('buy')
            scalpAlgo(rate.value,qty.value)
        }
        if (sma10.innerText<sma20.innerText && buy==1) {
            console.log('sell')
            sellStock(rate.value,qty.value)
        }


    },1000)

    sell.addEventListener("click", ()=>{
        console.log('stop clicked')
        myStopFunction(tradeinterval)
    });

}

