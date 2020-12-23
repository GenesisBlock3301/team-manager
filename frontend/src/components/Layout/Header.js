import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component{
     render() {
         return(
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
                  </div>
              </nav>
         )
    }
}
export default Header;