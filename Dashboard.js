import { makeStyles,Typography,Link, Button,AppBar,Grid } from '@material-ui/core';
import { BorderColor } from '@material-ui/icons';
import Header from '../components/Header'
import ContentDash from '../components/ContentDash'
import React,{useState} from 'react'

const useStyles = makeStyles((theme)=>({

}))


export default function Dashboard() {
    const classes = useStyles()
    

    return (
       <Grid container direction='column'>
         <Grid item>
           <Header/>
         </Grid>
         <Grid item container>
           <Grid xs={0} sm={2}/>

           <Grid item xs ={12} sm={8}>

           <ContentDash/>
           </Grid>

         <Grid xs={0} sm={2} />
         </Grid>
       </Grid>
    )
}
