import React from 'react'
import {styled} from "@mui/material";



const Main = styled('div',{shouldForwardProp:(prop)=>prop !=='open'})<{
    open?:boolean
}>(({theme,open})=>({
    flexGrow:1,
    padding:theme.spacing(10),
    transition:theme.transitions.create('margin',{
        easing:theme.transitions.easing.sharp,
        duration:theme.transitions.duration.leavingScreen
    }),
    marginLeft:`-240px`,
    ...(open && {
        transition:theme.transitions.create('margin',{
            easing:theme.transitions.easing.easeOut,
            duration:theme.transitions.duration.enteringScreen
        }),
        marginLeft:0
    })
}))

export {
    Main
}