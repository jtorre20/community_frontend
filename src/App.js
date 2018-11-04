import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './components/Home.js'
import Header from './components/Header'
import Signup from './components/Signup'
import Login from './components/Login'
import Menu from './components/Menu'
import MoodContainer from './containers/MoodContainer'
import Timing from './components/Timing'
import CardContainer from './containers/CardContainer'
import ChartContainer from './containers/ChartContainer'
import BottomContainer from './containers/BottomContainer'
import Bubble from './components/Bubble'
import * as d3 from "d3"
// import { ParallaxProvider } from 'react-scroll-parallax';
// import ParallaxComponent from 'react-parallax-component';
// import Parallax from 'react-springy-parallax'
import './App.css';
// const aylienEndpoint = 'https://api.aylien.com/api/v1/sentiment'
const railsRest = 'http://https://secure-taiga-t49628.herokuapp.com/moods'
// const railsRest = 'https://localhost:3000/moods'
const railsText = 'http://https://secure-taiga-49628.herokuapp.com/texts'
// const railsText = 'https://localhost:3000/texts'
const railsMood = 'http://https://secure-taiga-49628.herokuapp.com/moodentry'
// const railsMood = 'https://localhost:3000/moodentry'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
      userSentiment: "",
      moodIntensity: null,
      sentimentResults: null,
      date: new Date(),
      chartData: null,
      timeLineData: null,
      arrayLine: null

    }
  }

  // Fetch request //

  componentDidMount() {
    if(localStorage.getItem("token")) {
      this.setState({loggedIn: true})
    } else {
      localStorage.removeItem("token")
      this.setState({loggedIn: false})
    }

    fetch(railsMood, {
      method: "POST",

       headers: {
        
        "Content-Type": "application/json",
         "Accept": "application/json"
       },
        body: JSON.stringify({ 
        user_id: localStorage.getItem("token")
      })
     })
     .then(res => res.json())
     .then(moodObj => this.setState({timeLineData: moodObj}))
     .then(()=> this.setState({arrayLine: Object.keys(this.state.timeLineData).map(key => [key, this.state.timeLineData[key]])}))
  }


   handleFetch = () => {
    
     fetch(railsText, {
       method: "POST",

       headers: {
        
        "Content-Type": "application/json",
         "Accept": "application/json"
       },
       body: JSON.stringify({ 
        mode: "tweet" || "document",
        text: this.state.userSentiment,
        language: "auto",
        user_id: localStorage.getItem("token"),
        mood: null,
      })
     })
      .then(res => res.json())
      .then(sentiment => this.setState({sentimentResults: sentiment}))
      // .then(sentiment => console.log("sentiment", typeof(sentiment)))
      // .then(sentiment => this.setState({sentimentResults: this.state.sentimentResults.concat(sentiment)}))
      // .then(sentiment => this.setState({sentimentResults: {...this.state.sentimentResults, sentiment}}))
    }

    handleMoodFetch = () => {
    
      fetch(railsRest, {
        method: "POST",
 
        headers: {
         
         "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
         user_id: localStorage.getItem("token"),
         mood: this.state.moodIntensity,  
         time: this.state.date 
 
       })
      })
       .then(res => res.json())
       .then(result => {  
         this.setState({chartData: result})
         })
     }


//Updating State//

  loggingIn = () => {
    this.setState({loggedIn: true})
  }

  onLogoutClick = () => {
    this.setState({loggedIn: false})
    localStorage.setItem("token", "")
  }

  onDateChange = date => {
    this.setState({ date })
  }

  updateUserSentiment = (inputText) => {
      // this.setState({userSentiment: [...this.state.userSentiment, formData.inputText]})
    this.setState({userSentiment: inputText}, 
                  () => this.handleFetch())
    }

  updateMoodIntensity = (moodIntensity) => {
    this.setState({ moodIntensity },
                  () => this.handleMoodFetch())
    }





  render() {
    // console.log("arraylie",this.state.arrayLine)
    return (

    // <ParallaxComponent
    // speed="0.003"
    // width="300"
    // top="40%"
    // left="100"
    // > 
 

      <div className="app">

 
   
        < Header loggedIn={this.state.loggedIn} logOut={this.onLogoutClick}/>
        < Menu loggedIn={this.state.loggedIn} />
        <Switch>
          < Route exact path="/" component={Home} />
          < Route path="/signup" render={() => < Signup loggingIn={this.signup} /> }/>
          < Route path="/login" render={() => < Login loggingIn={this.loggingIn} /> }/>
          < Route path="/moodpage" render={() => <div>
        
            < MoodContainer 
            className="jumbotron"
            updateMood={this.updateMoodIntensity} 
            onSubmit={this.updateUserSentiment} 
            handleFetch={this.handleFetch}
            /> 
          {/* </ParallaxComponent> */}
         
          
            < Timing 
            onDateChange={this.onDateChange}
            date={this.state.date}
            />
            {this.state.chartData ? < ChartContainer chartData={this.state.chartData} /> : null}
            {!this.state.arrayLine ? "" : < Bubble
            
            data={this.state.arrayLine}
            height={40}
            selectX={datum => new Date(datum.day)}
            selectY={datum => datum.productPerceivedQuality}
            width={200} 
            />}
            
            
            {/* < BottomContainer /> */}
            </div>}
          />
          < Route path="/cards" render={() => < CardContainer results={this.state.sentimentResults}/>} />
        </Switch>

      </div>
  // </ParallaxComponent>
    )
  }
}


export default App;
