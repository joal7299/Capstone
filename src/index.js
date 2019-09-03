import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Parent from './components/Parent';
import Roommate from './components/Roommate';
import Driver from './components/Driver';


// import * as serviceWorker from './serviceWorker';
const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Root</Link>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/parent">Parent</Link>
                </li>
                <li>
                    <Link to="/roommate">Roommate</Link>
                </li>
                <li>
                    <Link to="/driver">Driver</Link>
                </li>
            </ul>
            <Route exact path="/" component={App}/>
            //app will be where the initial story goes down
            <Route path="/home" component={Home}/>
            //home sets the scene for the funeral
            <Route path="/parent" component={Parent}/>
            //option 1: talk to parent
            <Route path="/roommate" component={Roommate}/>
            //option 1: talk to parent
            <Route path="/driver" component={Driver}/>
            //option 1: talk to parent
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
