import { useEffect } from 'react'
import './App.css'
import SearchBar from "./Searchbar.tsx"
import Datepicker from "./Datepicker.tsx"

import {getToday, getFirstDate, getSecondDate} from "./services/stockservice.ts"

function App() {

  useEffect(() => {

    getToday();
    getFirstDate("2017-11-15");
    getSecondDate("2017-11-15");

  });


  return ( 
  <>
    <h1 className="heading">What I could Have when i invested x in X ?</h1>
    

    <SearchBar />

    <Datepicker />
  

  </>
    )
}

export default App
