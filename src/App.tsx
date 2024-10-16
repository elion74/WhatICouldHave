import {SetStateAction, useEffect, useState} from 'react'
import './App.css'
import SearchBar from "./Searchbar.tsx"
import Datepicker from "./Datepicker.tsx"
import LineChart from "./LineChart.tsx"
import Results from "./Results.tsx"



import {getToday} from "./services/stockservice.ts"



function App() {

  const [stockdata, setStockData] = useState([]);
  
  const [stockName, setStockName] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const handleDataFromChild = (data:any) => {

    setStockName(data);

    console.log(data)

  }
 // Fetch stock data whenever the stockName changes
 useEffect(() => {
  if (stockName) {
    setLoading(true);
    getToday(stockName)
      .then((result: SetStateAction<never[]>) => {
        setStockData(result);
        setLoading(false);
      })
      .catch((error: any) => {
        console.error('Error fetching stock data:', error);
        setLoading(false);
      });
  }
}, [stockName]);

  return ( 
  <>
    <h1 className="heading">What I could Have when i invested x in X ?</h1>
    

    <SearchBar  sendDataToParent = {handleDataFromChild}/>


    <Datepicker />

       {/* Display the LineChart with fetched stock data */}
       {!loading && stockdata.length > 0 && <LineChart dataset={stockdata} />}

    <Results />

    
  
  </>
    )
}

export default App
