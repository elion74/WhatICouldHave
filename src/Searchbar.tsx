import { Autocomplete, Box, Button} from '@mui/joy'
import SearchIcon from '@mui/icons-material/Search'


function Searchbar() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "center", marginTop:"50px"}}>

        <Autocomplete 
          popupIcon = {null}
          options={["hhaslo"]} 
          sx = {{width: "300px", backgroundColor:"white", 
            "& .MuiInputBase-root": { backgroundColor: "white"},  
            "& .MuiAutocomplete-option": { backgroundColor: "white"}, 
            "& .MuiAutocomplete-wrapper": { backgroundColor: "white", color:"black"},
            '--Input-radius': `39px`,
            '--Input-decoratorChildHeight': `$25px`,
        
          }} 
          disableClearable={true}
        />
    
        <Button  size="sm" sx = {{width: "30px", backgroundColor:"#1a1a1a", marginLeft:"10px"}}>
            <SearchIcon  sx =  {{backgroundColor:"#1a1a1a"}}/>
        </Button>

    </Box>
  )
}

export default Searchbar