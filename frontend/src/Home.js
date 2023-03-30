import React, { Component } from 'react';
import './App.css';
import AppNavbar from './Header/AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                
                <form>
                <br></br>
                <Button color="none"><Link to="/viewslae">SLAE and Platform Configuration</Link></Button><br></br>
                <Button color="link"><Link to="/oauth">OAuth 2.0 Clients</Link></Button><br></br>
                <Button color="link"><Link to="/clients">Integration tool to test OAuth Clients</Link></Button>
 
                    </form>
            </div>

            
        );
    }
}

export default Home;