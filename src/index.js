import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Parent from './components/Parent';
import Roommate from './components/Roommate';
import Driver from './components/Driver';


// import * as serviceWorker from './serviceWorker';
const routing = (
    <Router>
        <div>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <Link to="/">Root</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/home">Home</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/parent">Parent</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/roommate">Roommate</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/driver">Driver</Link>*/}
            {/*    </li>*/}
            {/*</ul>*/}
            <Route exact path="/" component={App}/>
            <Route path="/home" component={Home}/>
            <Route path="/parent" component={Parent}/>
            <Route path="/roommate" component={Roommate}/>
            <Route path="/driver" component={Driver}/>
        </div>

    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
