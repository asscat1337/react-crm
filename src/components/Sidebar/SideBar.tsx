import React from 'react'
import {
    styled,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import {Main} from "../Main/Main";


interface AppBarProps extends MuiAppBarProps{
    open?:boolean
}


const NavBar = styled(MuiAppBar,{
    shouldForwardProp:(prop) => prop !== 'open'
})<AppBarProps>(({theme,open})=>({
    transition:theme.transitions.create(['margin','width'],{
        easing:theme.transitions.easing.sharp,
        duration:theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        width:`calc(100% - 240px)`,
        marginLeft:`240px`,
        transition:theme.transitions.easing.easeOut,
        duration:theme.transitions.duration.enteringScreen
    })
}))
const DrawerHeader = styled('div')(({theme})=>({
    display:'flex',
    alignItems:'center',
    padding:theme.spacing(0,1),
    ...theme.mixins.toolbar,
    justifyContent:'flex-end'
}))


export {
    DrawerHeader,
    NavBar,
}