import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../../actions/auth'

class Header extends Component {
    render() {
        console.warn("Header props", this.props);
        const {isAuthenticate, user} = this.props.auth
        const authLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <span className="navbar-text mr-0">
                    <strong>{user ?`Welcome ${user.username}`:''}</strong>
                </span>
                <li className="nav-item">
                    <button onClick={this.props.logoutHandler} className="nav-link btn btn-info btn-sm text-light">Logout</button>
                </li>
            </ul>
        );
        const guestLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        login
                    </Link>
                </li>
            </ul>
        );
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <button
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target="#navbarToggleerDemo01"
                        aria-expanded="false"
                        aria-level="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a href="" className="navbar-brand">
                            Lead Manager
                        </a>
                    </div>
                    {isAuthenticate ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});
const mapDispatchTopProps=(dispatch)=>({
    logoutHandler: ()=>logout(dispatch)
});
export default connect(mapStateToProps,mapDispatchTopProps)(Header);