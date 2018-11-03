import React from 'react'
import SignupForm from './SignupForm'

class Signup extends React.Component{



  render(){
    return(
      <div className="container">
        <div className="col-md-4 col-md-offset-4">
          < SignupForm loggingIn={this.props.loggingIn}/>
        </div>
      </div>
    )
  }
}



export default Signup