import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Parent from './components/Parent';
import Friend from './components/Friend';
import Boyfriend from './components/Boyfriend';
import Bed from './components/Bed';
import Desk from './components/Desk';
import Trash from './components/Trash';
import Note from './components/Note';
import Music from './components/musicGame';
import End from './components/End';
import Credits from "./components/Credits"
import TextMomtoBoyfriend from "./components/TextMomtoBoyfriend";
import TextErictofriend from "./components/TextErictoFriend";
import ParentFinished from "./components/ParentFinished";
import PageShell from "./PageShell";

const routing = (
    <Router>
        <div>
            <Route exact path="/" exact component={PageShell(App)}/>
            <Route path="/home" exact component={PageShell(Home)}/>
            <Route path="/parent" exact component={PageShell(Parent)}/>
            <Route path="/parentfinished" exact component={PageShell(ParentFinished)}/>
            <Route path="/friend" exact component={PageShell(Friend)}/>
            <Route path="/boyfriend" exact component={PageShell(Boyfriend)}/>
            <Route path="/bed" exact component={PageShell(Bed)}/>
            <Route path="/desk" exact component={PageShell(Desk)}/>
            <Route path="/trash" exact component={PageShell(Trash)}/>
            <Route path="/note" exact component={PageShell(Note)}/>
            <Route path="/musicGame" exact component={PageShell(Music)}/>
            <Route path="/textMomtoBoyfriend" exact component={PageShell(TextMomtoBoyfriend)}/>
            <Route path="/textErictofriend" exact component={PageShell(TextErictofriend)}/>
            <Route path="/end" exact component={PageShell(End)}/>
            <Route path="/credits" exact component={PageShell(Credits)}/>


        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
