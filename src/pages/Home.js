import React from 'react';
import Container from '@material-ui/core/Container';
import FullWidthGrid from '../components/Grid/Grid'
import './home.css'

function Home (){
    return (

        <div className='sheet'>
       <Container>
           <FullWidthGrid></FullWidthGrid>
       </Container>
       </div>
    )
}

export default Home;