import React from 'react'
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import {Redirect} from 'react-router-dom'
// import Button from '@material-ui/core/Button';
const signUpEndPoint = 'http://localhost:3000/users'

class SignupForm extends React.Component{

  constructor(props) {
    super(props)

    this.state= {
      username: "",
      email: "", 
      password: "",
      password_confirmation: "",
      redirect: false
    }

    // this.onChange = this.onChange.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    } 

    onSubmit = (e) => {
      e.preventDefault()
      

      fetch(signUpEndPoint, {
        method: "POST",
     
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ 
          username: this.state.username, 
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation
          
        })
      })
        .then(res => res.json())
        .then(result => {

          if (result.status === "success") {
            
            localStorage.setItem("token", result.user);
            this.setState({redirect: true});
            this.props.loggingIn()
          } else {
            <div class="alert alert-warning" role="alert">
              This is a warning alert—check it out!
            </div>
          }
          })
   
       
    }

  render() {
   
    if(this.state.redirect) {
      return <Redirect push to={"/moodpage"}/>
    }
    return (
      <form  className="container" onSubmit={this.onSubmit}>
      <h1> Sign Up </h1>
        {/* <div className=""col-md-6 col-md-offset-3> */}
          <div className="form-group">
            <div className="control-group">
            <label for="exampleUsername">Username</label>
            <input
              className="signups"
              for="exampleUsername"
              id="inputUsername"
              aria-describedby="usernameHelp"
              value={this.state.username}
              onChange={this.onChange}
              type="text"
              name="username"
              placeholder="Enter Username"
              className="form-control"
              />
              <small 
              id="usernameHelp" className="form-text text-muted">This will be your username!
              </small>
            </div>
          </div>

          <div className="form-group">
            <label className="control-group">Email</label>
            <input 
              className="signups"
              value={this.state.email}
              onChange={this.onChange}
              type="email"
              name="email"
              className="form-control"
              id="emailExample"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              />
              <small
              id="emailHelp" className="form-text text-muted">We'll never share you email with anyone else.
              </small>
          </div>


          <div className="form-group">
            <label className="control-group">Password</label>
            <input
              className="signups" 
              value={this.state.password}
              onChange={this.onChange}
              type="password"
              name="password"
              className="form-control"
              id="passwordExample"
              arai-describedby="passwordHelp"
              placeholder="Enter password"
              />
          </div>

          <div className="form-group">
            <label className="control-group">Password Confirmation</label>
            <input
              className="signups" 
              value={this.state.password_confirmation}
              onChange={this.onChange}
              type="password"
              name="password_confirmation"
              className="form-control"
              id="passwordConfirmation"
              arai-describedby="passwordHelp"
              placeholder="Enter password confirmation"
              />
          </div>
    

        <div className="form-group">

          <button type="submit" class="btn btn-primary">Submit</button>

        </div>
      </form>
    )
  }
}



export default SignupForm