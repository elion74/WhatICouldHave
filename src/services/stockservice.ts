    //Date format 2017-11-15

    const getToday  = async(setStockData:any) => {

       const urlToday = `https://www.alphavantage.co/query?function=HISTORICAL_OPTIONS&symbol=IBM&apikey=${process.env.REACT_APP_API_KEY}`
   
        try {

            const response = await fetch(urlToday);

            const data = await  response.json();
            console.log(data)
            setStockData(data);


        }catch(e){
            console.log("fehler"+e)
        }
    }

    export {getToday}