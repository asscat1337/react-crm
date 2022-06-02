import React from "react";
import {Box,CssBaseline} from '@mui/material'
import Context from "../../context/context";
import {Main} from "../../components/Main/Main";


const Dashboard:React.FC=()=>{
    const {open} = React.useContext(Context)
    return (
        <Box sx={{display:'flex'}}>
            <CssBaseline/>
                <div>Dashboard</div>
                <div>test</div>
        </Box>
    )
}


export default Dashboard