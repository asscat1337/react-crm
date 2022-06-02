import React from 'react'
import {Outlet} from "react-router-dom";
import {Main} from "../Main/Main";
import {NavBar} from "../Sidebar/SideBar";
import {Box} from "@mui/material";
import Context from "../../context/context";
import {CustomDrawer} from "../Drawer/Drawer";


const MainLayout:React.FC=()=>{
    const {open} = React.useContext(Context)
    return (
        <Box sx={{display:'flex'}}>
            <NavBar/>
            <CustomDrawer/>
            <Main open={open}>
                <Outlet/>
            </Main>
        </Box>
    )
}


export {
    MainLayout
}