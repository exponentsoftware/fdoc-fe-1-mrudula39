import Album from "./Album"
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    display:'flex',
    flexDirection:"row"
    
  },
 
  album :{
    color:'white',  
    fontSize:30,
    fontWeight:"bold",
    fontFamily: "sans-serif",
    textAlign:"left",
    marginLeft:24
  },
  
 
}));


function Albums(props) {
   const classes = useStyles();

  return (
    <div >
    <br/><br/>
     <Typography className={classes.album}>{props?.title}</Typography>
     <br/>
     <Grid container spacing={5}>
     
      
        {props?.data?.length > 0 &&
          props?.data?.map((albumData) =>
          <Grid item
              xs={12}
              sm={3}
              style={{ marginLeft: 'auto', alignItems: 'center' }}>
           <Album data={albumData} />
           </Grid>
           )}
     
    </Grid>
    </div>
  );
}


export default Albums;
