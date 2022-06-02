import React from 'react'
import {
    Box,
    Toolbar,
    Drawer,
    useTheme,
    Divider,
    List,
    ListItem,
    ListItemButton,
} from "@mui/material";
import {IconButton} from "@mui/material";
import {ChevronLeft, ChevronRight, Menu} from "@mui/icons-material";
import {NavBar, DrawerHeader} from "../Sidebar/SideBar";
import Context from "../../context/context";
import {Link} from "react-router-dom";
import {Main} from "../Main/Main";

const lists = ['Dashboard','Order','Costumer','Product']

const Nav:React.FC=()=>{
    const theme = useTheme()
    const {open,setOpen} = React.useContext(Context)
    return (
        // <Box sx={{display:'flex'}}>
            <NavBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={()=>setOpen(true)}
                        edge="start"
                        sx={{mr:2,...(open && {display:'none'})}}
                    >
                        <Menu/>
                    </IconButton>
                </Toolbar>
            </NavBar>
    )
}

export default Nav