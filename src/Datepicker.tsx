import React from 'react';
import { DatePicker } from 'antd';

//width:"200px", margin:"auto", marginTop:"30px"
export default function Datepicker () {

    return(
    <div style = {{width:"200px", display:"flex", flexDirection:"row",marginLeft:"auto",marginRight:"auto",  marginTop:"30px"}}>
      <DatePicker
          format="YYYY-MM-DD"

          placeholder="Start"
        
          style = {{width:"100px", height:"40px"}}
          popupStyle={{ 
            position: "absolute",
            left : "50%",
            transform: "translateX(-50%)"}}
          allowClear= {false}
          mode = "year"
        />   
       <p style = {{marginLeft:"10px", marginRight:"10px"}}>to</p>
   
        <DatePicker
          format="YYYY-MM-DD"

          placeholder="End"
        
          style = {{width:"100px", height:"40px"}}
          popupStyle={{ 
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)"}}
          allowClear= {false}
          mode="year"
        />   
      </div>

    )

}