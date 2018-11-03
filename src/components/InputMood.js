import React from 'react'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
// import FormControl from '@material-ui/core/FormControl';

class InputMood extends React.Component{
  
  render() {
    const { inputChange } = this.props
    return (
      <div className="container"> 
      
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Text</span>
            </div>
              <input 
              type="text"
              // onSubmit
              // value=""
              className="form-control" 
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-default"
              placeholder="What text do you want to analyze?"
              onChange={inputChange}
              />
        </div>
        <small className="form-text white-text">Enter some text and hit the button...</small> 
      </div>
    )   
  }
}

export default InputMood