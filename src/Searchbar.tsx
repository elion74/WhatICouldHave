import { Autocomplete, Box, Button} from '@mui/joy'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

function Searchbar({sendDataToParent}:any) {


    const [name, setName] = useState<string>("");
    const [options, setOptions] = useState<string[]>([]);


    const handleSearch = async (event: any, value: string | null) => {
      if (!value) return;
  
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
  
        if (data.bestMatches) {
          const symbols = data.bestMatches.map((match: any) => `${match['1. symbol']} - ${match['2. name']}`);
          setOptions(symbols);
        } else {
          setOptions([]);
        }
      } catch (e) {
        console.log('Error fetching ticker data:', e);
      }
    };
  

    const handleSelect = (event: any, value: string | null) => {
      setName(value || '');
      if (sendDataToParent) sendDataToParent(value); // Send the selected value to the parent component
    };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "center", marginTop:"50px"}}>

        <Autocomplete 
          popupIcon = {null}
          options={options} 
          sx = {{width: "300px", backgroundColor:"white", 
            "& .MuiInputBase-root": { backgroundColor: "white"},  
            "& .MuiAutocomplete-option": { backgroundColor: "white"}, 
            "& .MuiAutocomplete-wrapper": { backgroundColor: "white", color:"black"},
            '--Input-radius': `39px`,
            '--Input-decoratorChildHeight': `$25px`,
        
          }} 
          disableClearable={true}
          value= {name}
          onInputChange={handleSearch} // Trigger search on input change
          onChange={handleSelect} // Handle selection from dropdown
        />
    
      <Button  size="sm" sx = {{width: "30px", backgroundColor:"#1a1a1a", marginLeft:"10px"}} onClick={() =>{console.log(name)} }>
            <SearchIcon  sx =  {{backgroundColor:"#1a1a1a"}}/>
        </Button>

    </Box>
  )
}

export default Searchbar