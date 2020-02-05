import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from "react-router-dom";
import './Styles.css';
import Home from "./Pages/Home/Home";
import Remote from "./Pages/Remote/Remote";
import NavBar from './Elements/NavBar/NavBar';

ReactDOM.render(
    <div>
        <NavBar/>   
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/remote" component={Remote}/>
            </div>
        </BrowserRouter>
    </div>
    , document.getElementById('root')
);