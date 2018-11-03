//  provide(:title, "Inscape")

import React from 'react'
import {withRouter} from 'react-router-dom'


class Home extends React.Component{


  render() {
    return (
      <div className="center jumbotron">
    
        <h1>Inscape</h1>

          <h2>
            Your Community App
          </h2>
          <div className="button-wrapper">
            <button type="submit" class="btn btn-md" onClick={() => this.props.history.push("/signup")}>Sign up now!</button>
            <button type="submit" class="btn btn-md btn-primary" onClick={() => this.props.history.push("/login")}>Login</button>
          </div>
      </div>
    )
  }



}

export default withRouter(Home)