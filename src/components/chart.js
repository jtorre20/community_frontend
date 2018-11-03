import React from 'react'
import {Radar} from 'react-chartjs-2'

class Chart extends React.Component{





  render() {
      let moodData= {
        labels: ['Anger', 'Fear', 'Disgust', 'Happiness', 'Sadness','Surprise', 'Contempt'],
        datasets: [{  
        label: this.props.resultsData.moods.time,
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointHoverBackgroundColor: "#ae2121",
        pointHoverRadius: 11,
        data: []
        }]

    }

      moodData.labels.forEach(emotion => {
      moodData.datasets[0].data.push(this.props.resultsData.moods.mood[emotion.toLowerCase()])
      emotion, this.props.resultsData.moods.mood[emotion.toLowerCase()]
      })

    let options = {
    maintainAspectRatio: true,
    scale: {
      ticks: {
        beginAtZero: true,
        max: 10
      }
    }
};

  
    return(
      <Radar data={moodData} options={options}/>

    )


  }
}


      // console.log("inside chart", this.props)
      // debugger



      // for (let key in this.props.resultsData.moods.mood) {
      // moodData.labels.push(key)
      // moodData.datasets[0].data.push(this.props.resultsData.moods.mood[`${key}`])
      // }

      // this.props.resultsData.moods.mood.

  





export default Chart