console.log("prices added")
const search=document.getElementById("search");
const srchbtn=document.getElementById("srchbtn");



function getStockDetails(stockName){
    
    const currPrice=document.getElementById("Rate")
    // const apikey=`demo`
    const apikey=`DE9S8XOXL2V33Y8L`
    //let company=`IBM`
    let company=stockName
    



    const url=`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${company}&interval=5min&outputsize=full&apikey=${apikey}`

    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{

        const entries = Object.entries(data["Time Series (5min)"]);
        //console.log(entries.length)
        
        let i=entries.length-1;
        let wait = setInterval(() => {
            const element = entries[i];
            i--;
            if(i<=0){
                myStopFunction(wait);
            }
            //console.log(element[1]["1. open"])
            currPrice.value=element[1]["1. open"]
        }, 1000);

        

    })
}

const sma10=document.getElementById("sma10");
const sma10p=document.getElementById("sma10p");
const sma20=document.getElementById("sma20");
const sma20p=document.getElementById("sma20p");

function getsma(){
    
    const currPrice=document.getElementById("Rate")
    let stack=[];

    let smarating=setInterval(()=>{
        // console.log('sma 10 ='+sma(10))
        sma10p.innerText=sma10.innerText;
        sma10.innerText=sma(50)
        // console.log('sma 20 ='+sma(20))
        sma20p.innerText=sma20.innerText;
        sma20.innerText=sma(200)
    },100)
    sell.addEventListener("click", ()=>{
        console.log('stop clicked')
        myStopFunction(smarating)
    });

    function sma(window){
        
        let val=parseFloat(currPrice.value)

        if(stack.length<window){
            stack.push(val)
            //console.log(stack)
        }
        else{
            stack.shift()
            stack.push(val)
            //console.log(stack)
            let sum=0
            for (let i = 0; i < window; i++) {
                sum+= stack[i];   
            }
            return sum/window


        }
        
    }

}



srchbtn.addEventListener('click',()=>{
    console.log(search.value)
    let name=search.value;
    name=name.toUpperCase()
    console.log(name)
    getStockDetails(name)
    getsma();

})


