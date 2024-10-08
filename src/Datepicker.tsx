import * as React from 'react';
import MuiTextField, { TextFieldProps } from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export default function Datepicker () {

    const TextField = React.forwardRef(
        (props: TextFieldProps, ref: React.Ref<HTMLDivElement>) => (
          <MuiTextField {...props} ref={ref} size="small" />
        ),
    );

return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DateField', 'DatePicker']}>
        <DatePicker 
            slots={{ textField: TextField }}
        />
    </DemoContainer>
</LocalizationProvider>
)

}