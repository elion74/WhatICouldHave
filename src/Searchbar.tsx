import { Box, Button, Input } from '@mui/joy'
import SearchIcon from '@mui/icons-material/Search'


function Searchbar() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "center", marginTop:"50px"}}>

        <Input
            size="md"
            placeholder="email@mui.com"
            sx={{
            "backgroundColor": "white",
            '--Input-radius': `39px`,
            '--Input-decoratorChildHeight': `$25px`,
            width:"300px"
            }}
        />
          
        <Button  size="sm" sx = {{width: "20px", backgroundColor:"#1a1a1a"}}>
            <SearchIcon  sx =  {{backgroundColor:"#1a1a1a"}}/>
        </Button>
        


    </Box>
  )
}

export default Searchbar