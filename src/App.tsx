import {useEffect, useState} from 'react'
import './App.css'
import SearchBar from "./Searchbar.tsx"
import Datepicker from "./Datepicker.tsx"
import LineChart from "./LineChart.tsx"
import Results from "./Results.tsx"



import {getToday} from "./services/stockservice.ts"



function App() {

  const [stockdata, setStockData] = useState([]);
  
  const [stockname, setStockName] = useState<string>("");

  const handleDataFromChild = (data:any) => {

    setStockName(data);

  }

  useEffect(() => {

    getToday(setStockData);

  }, []);

  return ( 
  <>
    <h1 className="heading">What I could Have when i invested x in X ?</h1>
    

    <SearchBar  sendDataToParent = {handleDataFromChild}/>


    <Datepicker />

    <LineChart />

    <Results />

    
  
  </>
    )
}

export default App
