import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;


export default function Datepicker () {

    return(
    <div style = {{width:"200px", margin:"auto", marginTop:"30px"}}>
      <DatePicker
          format="YYYY-MM-DD"

          placeholder="Start"
        
          style = {{width:"100px"}}
          popupStyle={{ 
            position: "absolute",
            left : "50%",
            transform: "translateX(-50%)"}}
          allowClear= {false}
          mode = "year"
        />   
       
   
        <DatePicker
          format="YYYY-MM-DD"

          placeholder="End"
        
          style = {{width:"100px"}}
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