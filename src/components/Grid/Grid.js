import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProfilePic from '../../assets/profilePic.png';
import './grid.css';
import AboutMe from '../../aboutme.json';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import ExperienceCard from '../ExperienceCard/Card'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GiGraduateCap } from "react-icons/gi";
import Skills from '../Skills/Skills'
import { HiBadgeCheck } from "react-icons/hi";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    padding: theme.spacing(3),
    textAlign: 'center',
    fontSize:'46px',
    fontFamily:"Roboto"
  },

 
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  education:{
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginBottom:"50px"

  },

  pic: {
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
  },
  aboutMe:{
    fontWeight:"bold",
    padding: "10px",
    textAlign:'center'
    
  },
  eduTitle:{
    fontWeight:"bold",
    padding: "10px",
    textAlign:"center"
  },
  contactMe:{
    fontWeight:"bold",
    padding: "8px",
    marginBottom:"10px",
    textAlign:"center"
  },
  experience:{
    fontSize:"20px",
    textAlign: 'center',
    fontWeight:"bold"
  },
  icons:{
    marginTop:"15px",
    marginBottom:'20px',
    textAlign: 'left',
    fontSize:'17px'
  },
  icons1:{
    width:"25px",
    height:"25px",
    color:"#ffd180"
    
  },
  stmar:{
    marginBottom:"20px"
  },
  edicon:{
    
      width: theme.spacing(5),
      height: theme.spacing(5),
      textAlign:'center',
      marginRight:"15px"
    
  },
  college:{
    textAlign:"left",

  },
  checkmark:{
    marginRight:"15px",
    width: theme.spacing(3),
      height: theme.spacing(2),
  },
  body:{
    marginBottom:"15px"
  }
 
  
}));

export default function FullWidthGrid () {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.title}>Lismey Plasencia
         </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.pic}>
            <img src={ProfilePic} alt="Lismey Plasencia" className='profilePic'/>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Typography variant="h5" component="h2" className={classes.aboutMe}>
          About Me:
        </Typography>
            {AboutMe[0].summary}</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          <Typography variant="h5" component="h2" className={classes.contactMe}>
          Contact Me:
        </Typography>
         <div className={classes.icons}>
          
          <a href='https://github.com/Lismey23'><FaGithubSquare className={classes.icons1}/></a> GitHub
          <div className={classes.stmar}></div>
          <a href='https://www.linkedin.com/in/lismey-plasencia/?locale=en_US'><FaLinkedin className={classes.icons1}/></a> Linkedin
          <div className={classes.stmar}></div>
          <FaPhoneSquareAlt className={classes.icons1}/> 786 - 202 - 7085
          <div className={classes.stmar}></div>
          <AiTwotoneMail className={classes.icons1}/> lismeyplasencia@gmail.com
          <div className={classes.stmar}></div>
          <FaMapMarkerAlt className={classes.icons1}/> Miami, FL 33172
          
          </div>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          
            
            <ExperienceCard/>
            
            
        </Grid>
       

        
        <Grid item xs={12} sm={3}>
          
            <Skills/>
          
        </Grid>

        <Grid item xs={12} sm={12}>
          
  
  <Card className={classes.education}>
      <CardContent>
        <Typography className={classes.experience} color="textSecondary" gutterBottom>
        <GiGraduateCap className={classes.edicon}/>  Education
        </Typography>
        <HiBadgeCheck className={classes.checkmark}/>
        <Typography variant="h8" component="h8"color="textPrimary">
        {AboutMe[5].certification}
        </Typography>
        <Typography variant="subtitle2" className={classes.body}>
        {AboutMe[5].university} 
        </Typography>
        <Typography variant="body2" >
        {AboutMe[5].description} 
        </Typography>

        <br></br>



       
        <HiBadgeCheck className={classes.checkmark}/>
        <Typography variant="h8" component="h8"color="textPrimary">
        {AboutMe[6].certification}
        </Typography>
        <Typography variant="subtitle2" className={classes.body}>
        {AboutMe[6].university} 
        </Typography>
        <Typography variant="body2" >
        {AboutMe[6].description} 
        </Typography>

      </CardContent>
      
    </Card>
        
 



           









         
        </Grid>




        
       

        
       
      </Grid>
    </div>
  );
}


