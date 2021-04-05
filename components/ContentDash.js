import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '../components/Cards'
import { Grid } from '@material-ui/core';
import Constant from './Constant'

    const loopPlayers = ConstantObj=>{
        return(
<Grid item xs={12} sm={4}>
<Card {...ConstantObj}/>
           
</Grid>
        )
    }

export default function ContentDash() {

    return (
      <Grid container spacing={2}>
{Constant.map(ConstantObj=>loopPlayers(ConstantObj))}

      </Grid>
       
    )
}
