import React from 'react';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AboutMe from '../../aboutme.json';
import { Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import { FaCss3Alt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiHeroku } from "react-icons/di";





const useStyles = makeStyles((theme) => ({


  root1:{
      backgroundColor:'#212529',
      marginBottom: '6px',
      textAlign:'center',
      padding: theme.spacing(2),
      color:'white'
  },
 
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  root: {
    marginBottom: '19px',
    textAlign:'center',
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper
  },
  aboutMe:{
    fontWeight:"bold",
    padding: "10px",
  },
  icons:{
    width:"25px",
    height:"20px",
    marginRight:'10px'
  },
  languages:{
    fontFamily:  'Arial',
    fontSize:"20px",
    fontWeight:'bold' 
  },
  avatarCSS:{
    color: "white",
    backgroundColor:"#4fc3f7",
    width: theme.spacing(4),
    height: theme.spacing(4)
    
  },
  avatarHtml:{
    color:"white",
    backgroundColor:"#ef5350",
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  avatarJS:{
    color:"white",
    backgroundColor:"#ffd600",
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  avatarJquery:{
    backgroundColor:"#1565c0",
    color:"white",
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  avatarBootstrap:{
    backgroundColor:"#673ab7",
    color:"white",
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  avatarMDB:{
    backgroundColor:"green",
    color:"white",
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  avatarMSQL:{
    backgroundColor:"#0277bd",
    color:"white",
    width: theme.spacing(4),
    height: theme.spacing(4)
  }
  
}));


export default function Skills() {
  const classes = useStyles();
  
  return (

    <div>
   
   <Paper className={classes.root1}>
   <Typography variant="h6" component="h7" className={classes.aboutMe}>
   <FaCode className={classes.icons}/> 
          Skills
        </Typography>
   </Paper>

  
    <Paper className={classes.root} >
      
        <Typography variant="h7" component="h7" className={classes.languages}>
         Languages
        </Typography>


        <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatarCSS} variant='rounded'>
            <FaCss3Alt />
          </Avatar>
          
        </ListItemAvatar>
        <ListItemText secondary="CSS" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatarHtml} variant='rounded'>
            <FaHtml5 />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary="HTML" />
      </ListItem>
      
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatarJS} variant='rounded'>
            <FaJs />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary="JavaScript" />
      </ListItem>

     


      
    </List>

    </Paper>

    <Paper className={classes.root} >
      
        <Typography variant="h7" component="h7" className={classes.languages}>
         Libraries
        </Typography>


        <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatarCSS} variant='rounded'>
            <FaReact />
          </Avatar>
          
        </ListItemAvatar>
        <ListItemText secondary="React.js" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatarBootstrap} variant='rounded'>
            <FaBootstrap />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary="Bootstrap" />
      </ListItem>
      
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatarJquery} variant='rounded'>
            <DiJqueryLogo />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary="Jquery" />
      </ListItem>

     


      
    </List>

    </Paper>

    <Paper className={classes.root} >
      
      <Typography variant="h7" component="h7" className={classes.languages}>
      Databases
      </Typography>


      <List className={classes.root}>
    <ListItem>
      <ListItemAvatar>
        <Avatar className={classes.avatarMDB} variant='rounded'>
          <DiMongodb />
        </Avatar>
        
      </ListItemAvatar>
      <ListItemText secondary="MongoDB" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar className={classes.avatarMSQL} variant='rounded'>
          <DiMysql />
        </Avatar>
      </ListItemAvatar>
      <ListItemText secondary="MySQL" />
    </ListItem>
    
  </List>

  </Paper>
  <Paper className={classes.root} >
      
      <Typography variant="h7" component="h7" className={classes.languages}>
      Tools
      </Typography>


      <List className={classes.root}>
    <ListItem>
      <ListItemAvatar>
        <Avatar className={classes.avatarHtml} variant='rounded'>
          <DiGit />
        </Avatar>
        
      </ListItemAvatar>
      <ListItemText secondary="Git" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar className={classes.avatarBootstrap} variant='rounded'>
          <DiHeroku />
        </Avatar>
      </ListItemAvatar>
      <ListItemText secondary="Heroku" />
    </ListItem>
    
    

   


    
  </List>

  </Paper>

    </div>

  
    


    
    




  

   
    







  );
}

