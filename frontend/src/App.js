import './App.css';
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import Header from "./components/Layout/Header";
import Dashboard from "./components/leads/Dashboard";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import React, {Fragment, Component} from 'react';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Fragment>
                    <Switch>
                        <Route exact path='/' component={Dashboard}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        </div>
    );
}

export default App;
