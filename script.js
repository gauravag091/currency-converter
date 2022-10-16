document.addEventListener("DOMContentLoaded",()=>{

    document.querySelector("#currency-converter").addEventListener('submit', async (event)=>{
        event.preventDefault();
        console.log("async function called first");
        const {target:{from,to,amount}} = event;

        let headers = new Headers();
        headers.append("apikey", "q9hddoVG5zQ5r9xD3683aUdP2fNJ3i00");
        
        const requestOptions = {
            method:"GET",
            headers,
        }

        // will return a promise
        let response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${Number(amount.value)}`, requestOptions)
        const data = await response.json();
        // .then(response=>response.json())
        // .then(data=>{

            // {
            //     "success": true,
            //     "query": {
            //         "from": "EUR",
            //         "to": "INR",
            //         "amount": 5
            //     },
            //     "info": {
            //         "timestamp": 1664813284,
            //         "rate": 80.028361
            //     },
            //     "date": "2022-10-03",
            //     "result": 400.141805
            // }
            try
            {
                let {info,date,result} = data;
            document.querySelector('.result').textContent = `As per the exchange rate ${info.rate.toFixed(2)} for ${date} => converted value in ${to.value} is ${result.toFixed(2)}`;
            }catch(error)
            {
                console.log(error);
            }
            finally
            {
                console.log("finally block");
            }
            

            console.log("end of function");
        });
        

    })

