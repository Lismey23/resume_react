import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../components/navbar.css' 

function NavBar () {
    const location = useLocation();
    
    return (

        
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand ></Navbar.Brand>
        <Nav className="mr-auto" >
           
          <Nav.Link  href="/">Home</Nav.Link>
          <Nav.Link  href="/portfolio1">Portfolio</Nav.Link>
          
          
        </Nav>
       
      </Navbar>
      //add Footer
        
    );
    
}
export default NavBar;



