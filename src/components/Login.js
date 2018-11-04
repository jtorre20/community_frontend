import React from 'react'
import {Redirect} from 'react-router-dom'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
// const userEndPoint = "http://localhost:3000/users/username"
const userEndPoint = "https://secure-taiga-49628.herokuapp.com/users/"

class Login extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
     email: '', 
     password: '',
     redirect: false
      }
    }
  

  onChange = (event) => {
    let stateCopy = {...this.state}
    stateCopy[event.target.name] = event.target.value 
    this.setState(stateCopy, () => this.state)
    
  }

  onSubmit = (e) => {
    e.preventDefault()

    fetch(userEndPoint, {
      method: "POST",
     
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({  
        email: this.state.email,
        password: this.state.password
        
      })
    })
    .then(res => res.json())
    .then(result => {
      if (result.status === "success") {
            
        localStorage.setItem("token", result.user);
        this.setState({redirect: true});
        this.props.loggingIn()
      } else {
        alert("Login Failed")
      }
    })
  }




  render() {
    if(this.state.redirect) {
      return <Redirect push to={"/moodpage"}/>
    } 
    // else{
    //   return <div class="alert alert-warning" role="alert">
    //           This is a warning alert—check it out!
    //     </div>
    // }
    return (
      < div className="login image">
        <form className="col-md-4 col-md-offset-4" onSubmit={this.onSubmit}>
        <label>Email</label>
          < input
            className="signups"
            name="email"
            label="email"
            value={this.state.email}
            onChange={this.onChange}/>

          <label>Password</label>
          < input
            className="signups"
            name="password"
            label="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}/>

          < button 
            value="Submit"
            type="submit"
            className="btn btn-primary center"
            onClick={this.onSave}>Smash</button>
        </form>
      </div>
        
      
  )}
}



export default Login