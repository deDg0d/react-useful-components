import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';

import{AppBar,IconButton,Toolbar,Typography,Grid}from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(()=>({
type:{
    flex:1
}
}))

export default function Header() {
    const classes = useStyles()
    return (
        <div>
        <AppBar position='static'>
           

            <Toolbar>
                
                <Typography className={classes.type}>
                    Header
                </Typography>
                <IconButton edge='start' aria-label="menu">
                    <MenuIcon/>

                </IconButton>
                
            </Toolbar>
            
        </AppBar>
        </div>
    )
}
