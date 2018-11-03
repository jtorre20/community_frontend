import React from 'react'
import { Component } from "react";
import InputMood from '../components/InputMood'

class InputMoodContainer extends Component {

  render() {
    const {inputChange} = this.props
    return(
      < InputMood inputChange={inputChange} />
    )
  }
}

export default InputMoodContainer