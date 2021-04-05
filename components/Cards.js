
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import {Avatar,CardHeader,CardMedia,IconButton} from '@material-ui/core'

const useStyles = makeStyles({

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image:{
    height:'200px',
    top:0
  }
});

export default function Cards(props) {
  const classes = useStyles();
  const{avatarSrc,title,subtitle,description,imgSrc} = props
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
      <CardHeader
        avatar={
          <Avatar src={avatarSrc} />
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia
        className={classes.image}
        image={imgSrc}
        
      />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {description}
        </Typography>
        <Typography variant="h5" component="h2">
         {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> More...</Button>
        <Button>check FIDE</Button>
      </CardActions>
    </Card>
  );
}