import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FaGithubSquare } from "react-icons/fa";

const useStyles = makeStyles({
  root: {
    minWidth:200,
    minHeight:500,
    margin:"auto",
    backgroundColor: "#9e9e9e",
    color:"white",
    border:5,
    borderColor:"yelow"
    // borderRadius:25,
  
  },
  gitHub:{
    width:"25px",
    height:"25px",
  },
  Media:{
      
      paddingTop:"56.25%'"
    //   width:"auto",
    //   objectFit:'cover'
  }
});

export default function PortfolioCard(props) {
  const classes = useStyles();

  return (
    <Card className={props.root} elevation="10">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.title}
        //   height='200'
          image={props.image}
          title={props.title}
          className={props.style}
        />
        <CardContent className={props.styleContent}>
          <Typography gutterBottom variant="h5" component="h2" >{props.title}
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={props.styleContent}>
        <Button size="small" color="primary" href={props.gh}>
          <FaGithubSquare className={classes.gitHub}
          
          />

        </Button>
        <Button size="small" color="primary" href={props.deployed}
        >
          Deployed Application
        </Button>
      </CardActions>
    </Card>
  );
}
