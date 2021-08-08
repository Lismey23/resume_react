import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard'
import { makeStyles } from '@material-ui/core/styles';
import Projects from '../projects.json'
import SisherPic from '../assets/Homepage.png'
import CovidClean from '../assets/cleanmind.png'
import GetToKnowU from "../assets/getToKnowU.JPG"
import WeatherPic from '../assets/miamiWeather.png'
import EmpTracker from "../assets/application.png";
import Scheduler from "../assets/scheduler.JPG"
import "./portfolio.css"

const useStyles = makeStyles({
    root: {
      marginTop:'40px',
      marginBottom:'40px',
    },
    sisher:{
        height:270,
    },
    covid:{
        height:200,
        padding:15,
        
    },
    weather:{
        height:220,
        width:420
    },
    topcards:{
        minWidth:200,
        minHeight:500,
        margin:"auto",
        backgroundColor: "#9e9e9e",
        color:"white",
        border:5,
        borderColor:"yelow"
        },
        bottomcard:{
            minWidth:200,
            minHeight:450,
            margin:"auto",
            backgroundColor: "#9e9e9e",
            color:"white",
            border:20,
            borderColor:"yelow"
            },
            covidCard:{
                backgroundColor:"#9e9e9e",
                color:"white"

            }
        
        
  });

function Portfolio (){
    const classes = useStyles();

    return (
        <div className="portfolio">
        <Container>

        <Grid container spacing={5} className={classes.root} justify="center">
            <Grid item xs={12} sm={6} md={4}>

                <PortfolioCard
                title={Projects[0].title}
                description={Projects[0].description}
                image={SisherPic}
                style={classes.sisher}
                gh={Projects[0].github}
                deployed={Projects[0].deployed}
                root={classes.topcards}
                
                
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>

                <PortfolioCard
                title={Projects[1].title}
                description={Projects[1].description}
                image={CovidClean}
                style={classes.covid}
                gh={Projects[1].github}
                deployed={Projects[1].deployed}
                styleContent={classes.covidCard}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>

                <PortfolioCard
                title={Projects[2].title}
                description={Projects[2].description}
                image={GetToKnowU}
                gh={Projects[2].github}
                deployed={Projects[2].deployed}
                root={classes.topcards}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>

                <PortfolioCard
                title={Projects[3].title}
                description={Projects[3].description}
                image={WeatherPic}
                style={classes.weather}
                gh={Projects[3].github}
                deployed={Projects[3].deployed}
                root={classes.bottomcard}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>

                <PortfolioCard
                title={Projects[4].title}
                description={Projects[4].description}
                image={EmpTracker}
                gh={Projects[4].github}
                deployed={Projects[4].deployed}
                root={classes.bottomcard}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>

                <PortfolioCard
                title={Projects[5].title}
                description={Projects[5].description}
                image={Scheduler}
                gh={Projects[5].github}
                deployed={Projects[5].deployed}
                root={classes.bottomcard}
                />
            </Grid>

   


        </Grid>
        </Container>
        </div>
    )
}

export default Portfolio;