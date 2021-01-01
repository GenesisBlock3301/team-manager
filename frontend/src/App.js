import './App.css';
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import Header from "./components/Layout/Header";
import Dashboard from "./components/leads/Dashboard";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import React, {Fragment, Component} from 'react';
import PrivateRoute from "./components/common/PrivateRoute";
import {LoadUser} from './actions/auth'
import store from './store'

class App extends Component {
    componentDidMount() {
        store.dispatch(LoadUser())
    }

    render() {
        console.log("app store",store)
        return (
            <div className="App">
                <BrowserRouter>
                    <Header/>
                    <Fragment>
                        <Switch>
                            <PrivateRoute exact path='/' component={Dashboard}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/login" component={Login}/>
                        </Switch>
                    </Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
