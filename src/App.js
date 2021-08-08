import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer/Footer'


function App (){
    return(
        <div>
        <Router>
            <div>
                <NavBar/>
                <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/portfolio' component={Portfolio}/>

                </Switch>


                


               
            </div>
        </Router>
        <Footer/>
        </div>
    )
}

export default App;