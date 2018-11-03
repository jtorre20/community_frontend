import React from 'react'
import InputMoodContainer from './InputMoodContainer'
import InputMood from '../components/InputMood'
import Selections from '../components/Selections'
import Timing from '../components/Timing'
import {withRouter} from 'react-router-dom'
import { Parallax, Image } from 'react-scroll-parallax';
import ParallaxImage from '../components/Parallax'




class MoodContainer extends React.Component{
  constructor() {
    super()

    this.state = {
     
      selections: {
        mood: [],
        intensity: []
    },
    moodIntensity: {
      anger: 0,
      fear: 0,
      disgust: 0,
      happiness: 0,
      sadness: 0,
      surprise: 0,
      contempt: 0
    },
      inputText: "",
      activeSelection: false
    }
  }

  


   onDateChange = date => {
    this.setState({ date })
  }
  
  inputChange = event => {
    this.setState({
      inputText: event.target.value
     })
  }

  handleMood = event => {
    let copySelection = {...this.state.selections}
      copySelection.mood = event.target.value
    this.setState({ selections: copySelection });

  };

  handleIntensity = event => {
    let dummySelection = {...this.state.selections}
      dummySelection.intensity = event.target.value
    this.setState({ selections: dummySelection })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  analyzeText = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.inputText)
    
  }

  updateMoods = (e) => {
    e.preventDefault()
    this.props.updateMood(this.state.moodIntensity)
  }

  updateMoodIntensity = (event) => {
    event.preventDefault()
    let copyIntensity={...this.state.moodIntensity}
    copyIntensity[event.target.name] = parseInt(event.target.value)
    // debugger
    this.setState({moodIntensity: copyIntensity})
  }

  onTextClick = (e) => {
    this.analyzeText(e)
    this.props.history.push("/cards")
  }


  render() {
    return (  
      <div className="center-screen jumbotron3" onSubmit={this.handleSubmit}>

      {/* <Parallax
        className="custom-class"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
        <Image src="./foggy.jpg" />
    </Parallax> */}

    


      {/* <ParallaxImage /> */}
        <InputMoodContainer inputChange={this.inputChange} />
        <button  type="submit" onClick={this.onTextClick}>Analyze Text</button>
        < Selections 
        className="dropdowns" 
        moodIntensity={this.state.moodIntensity}
        updateMoodIntensity={this.updateMoodIntensity}
        handleIntensity={this.handleIntensity} 
        handleMood={this.handleMood} 
        mood={this.state.selections.mood} 
        intensity={this.state.selections.intensity}
        disabled
        />
        {/* < Timing 
            onDateChange={this.onDateChange}
            date={this.state.date}
        /> */}

        <button color="green" type="submit" onClick={this.updateMoods}>Track Moods</button>
      </div>
      
      
    ) 
    
  }
}

export default withRouter(MoodContainer)