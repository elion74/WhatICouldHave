    //Date format 2017-11-15

    const getToday  = async() => {

        const urlToday = `https://www.alphavantage.co/query?function=HISTORICAL_OPTIONS&symbol=IBM&apikey=${process.env.API_KEY}`
   
        try {

            const response = await fetch(urlToday);

            const data = await  response.json();
            console.log(data)


        }catch(e){
            console.log("fehler"+e)
        }
    }

    const getFirstDate  = async (firstdate:string) => {
        
        const urlFirstDate= `https://www.alphavantage.co/query?function=HISTORICAL_OPTIONS&symbol=IBM&date=${firstdate}&apikey=${process.env.API_KEY}`;
    

        try {

            const response = await fetch(urlFirstDate);

            const data = await  response.json();
            console.log(data)


        }catch(e){
            console.log("fehler"+e)
        }
    }

    const getSecondDate  = async(seconddate:string) => {

        const urlSecondDate = `https://www.alphavantage.co/query?function=HISTORICAL_OPTIONS&symbol=IBM&date=${seconddate}&apikey=${process.env.API_KEY}`;
 

        try {

            const response = await fetch(urlSecondDate);

            const data = await  response.json();
            console.log(data)


        }catch(e){
            console.log("fehler"+e)
        }
    }





    export {getToday, getFirstDate, getSecondDate}