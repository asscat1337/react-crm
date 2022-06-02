import React from "react";
import {
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Drawer, useTheme
} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {Link} from "react-router-dom";
import Context from "../../context/context";
import {DrawerHeader} from "../Sidebar/SideBar";

const lists = ['Dashboard','Order','Costumer','Product']

const CustomDrawer:React.FC=()=>{
    const theme = useTheme()
    const {open,setOpen} = React.useContext(Context)
    return (
        <Drawer
            sx={{
                width:'240px',
                flexShrink:0,
                '& .MuiDrawer-paper':{
                    width:'240px',
                    boxSizing:'border-box'
                }
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={()=>setOpen(false)}>
                    {theme.direction ==='ltr' ? <ChevronLeft/> : <ChevronRight/>}
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List>
                {lists.map((list,idx)=>(
                    <ListItem key={idx}>
                        <ListItemButton>
                            <Link to={`/${list.toLowerCase()}`}>
                                {list}
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
export {
    CustomDrawer
}