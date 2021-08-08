import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import AboutMe from '../../aboutme.json';
import TDLogo from '../../assets/logo1.png';
import Sbox from '../../assets/SboxLogo.png'
import MedSol from '../../assets/MedSol.png'
import './card.css'



const useStyles = makeStyles((theme) => ({

 
  avatar: {
    backgroundColor: blue[500],
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  root: {
    marginBottom: '20px',
    
  },
}));

export default function ExperienceCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  

  return (

    <div className='sheet'>
   
    <Card className={classes.root} >
      <CardHeader
        avatar={
        <Avatar alt="Tech Data Logo" src={TDLogo} className={classes.large}/>
        }
        title={AboutMe[1].position}
        subheader={AboutMe[1].company}
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {AboutMe[1].description}
        </Typography>
      </CardContent>
    </Card>

   

  
    
<Card className={classes.root} >
      <CardHeader
        avatar={
        <Avatar alt="Solution Box LLC" src={Sbox} className={classes.large} />
        }
        title={AboutMe[2].position}
        subheader={AboutMe[2].company}
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {AboutMe[2].description}
        </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root}>
      <CardHeader
        avatar={
        <Avatar alt="MedSol Laboratories" src={MedSol} className={classes.large} />
        }
        title={AboutMe[3].position}
        subheader={AboutMe[3].company}
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {AboutMe[3].description}
        </Typography>
      </CardContent>
    </Card>

    <Card className={classes.root}>
      <CardHeader
        avatar={
        <Avatar alt="MedSol Laboratories" src={MedSol} className={classes.large} />
        }
        title={AboutMe[4].position}
        subheader={AboutMe[4].company}
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {AboutMe[4].description}
        </Typography>
      </CardContent>
    </Card>
    {/* <br></br> */}

    
    




  

    </div>
    







  );
}
