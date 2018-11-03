import React from 'react'
import { Redirect, NavLink, withRouter } from 'react-router-dom'


class Header extends React.Component{

  onLoginClick = () => {
    <Redirect to="/login"/>
  }


  render() {
    // debugger
    console.log("header", this.props)
    if (this.props.loggedIn) {
      return (
        <header className="navbar navbar-fixed-top navbar-inverse navbar navbar-dark bg-dark">
            <div className="container">
            <NavLink class="navbar-brand" id="logo" to="/">Inscape</NavLink>
              <nav>
                <ul className="nav justify-content-end">
                  <li> <NavLink className="nav-item" to="/">Home</NavLink> </li>
                  <li> <NavLink className="nav-item" onClick={this.props.logOut} to="/">Log Out</NavLink></li>
                  <li> <a className="nav-item" href="#">Help     </a></li>
                </ul>
              </nav>
            </div>
        </header>
      )
    } else {
      return (
        <header className="navbar navbar-fixed-top navbar-inverse navbar navbar-dark bg-dark">
          <div className="container">
            <NavLink class="navbar-brand" id="logo" to="/">Inscape</NavLink>
          </div>  
      </header>
      )
    }
  }
}


export default withRouter(Header)