import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from "react-router-dom";
import './Styles.css';
import Home from "./Pages/Home/Home";
import Remote from "./Pages/Remote/Remote";
import Login from "./Pages/Login/Login";
import CurrentQueue from "./Pages/CurrentQueue/CurrentQueue";
import AddToQueue from "./Pages/AddToQueue/AddToQueue";
import NavBar from './Elements/NavBar/NavBar';


// This uses <BrowserRouter> to determine which component to render
ReactDOM.render(
    <div>
        <NavBar/>   
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/remote" component={Remote}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/music/queue" component={CurrentQueue}/>
                <Route exact path="/music/queue-song" component={AddToQueue}/>
            </div>
        </BrowserRouter>
    </div>
    , document.getElementById('root')
);