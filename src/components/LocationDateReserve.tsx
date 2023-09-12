"use client"
import { Select,MenuItem } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import TextField from '@mui/material/TextField'

export default function LocationDateReserve() {
    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-row justify-center ">
            <div></div>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="ID" variant="outlined" /> 
            
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"/>
            </LocalizationProvider>
            <Select variant="standard" name="location" id="location" className="h-[2em] w-[200px]">
                <MenuItem value="chula"> Chula</MenuItem>
                <MenuItem value="raja"> Rajavithi</MenuItem>
                <MenuItem value="tham"> Thammasat</MenuItem>
            </Select>
            <div></div>
        </div>
    )
}
