import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Parent from './components/Parent';
import Friend from './components/Friend';
import Driver from './components/Driver';
import Boyfriend from './components/Boyfriend';
import Sister from './components/Sister';
import Bed from './components/Bed';
import Desk from './components/Desk';
import Trash from './components/Trash';
import Note from './components/Note';
import Music from './components/musicGame';


const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/home" component={Home}/>
            <Route path="/sister" component={Sister}/>
            <Route path="/parent" component={Parent}/>
            <Route path="/friend" component={Friend}/>
            <Route path="/boyfriend" component={Boyfriend}/>
            <Route path="/driver" component={Driver}/>
            <Route path="/bed" component={Bed}/>
            <Route path="/desk" component={Desk}/>
            <Route path="/trash" component={Trash}/>
            <Route path="/note" component={Note}/>
            <Route path="/musicGame" component={Music}/>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
