import React from 'react';
import ReactBubbleChart from 'react-bubble-chart';
import BubbleChart from '@weknow/react-bubble-chart-d3';
const railsMood = 'http://localhost:3000/moodentry'



class Bubble extends React.Component{

  constructor() {
    super()
    // this.myRef = React.createRef()
  }

handleClick = (event) => {
  console.log("in event", event.target)

  console.log("Custom bubble click func")
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
     .then(result => {
       console.log("result", result)
      //  debugger

      //  data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
       })
  }

  // componentDidMount() {
  //   let circle = React.findDOMNode(circle)
  // }


legendClick = (label) =>{
  console.log("Customer legend click func")
}


render() {
// console.log("in bubble", this.props)
return(
<BubbleChart
  className="jumbotron"
  graph = {{
    zoom: 0.7,
    offsetX: 0.2,
    offsetY: 0.1,
  }}

  width={1300}
  height={1000}
  showLegend={false} // optional value, pass false to disable the legend.
  legendPercentage={20} // number that represent the % of with that legend going to use.
  legendFont={{
        family: 'Arial',
        size: 12,
        color: '#000',
        weight: 'bold',
      }}
  valueFont={{
        family: 'Arial',
        size: 12,
        color: '#fff',
        weight: 'bold',
      }}
  labelFont={{
        family: 'Arial',
        size: 16,
        color: '#fff',
        weight: 'bold',
      }}
  //Custom bubble/legend click functions such as searching using the label, redirecting to other page
  onClick={console.log(this.ref)}
  legendClickFun={this.legendClick}
  data={this.props.data.map(array => ({label: array[0], value: array[1].length}))}
  
  // data={[
  //   { label: 'July', value: 1 },
  //   { label: 'API', value: 1 },
  //   { label: 'Data', value: 1 },
  //   { label: 'Commerce', value: 1 },
  //   { label: 'AI', value: 3 },
  //   { label: 'Management', value: 5 },
  //   { label: 'Testing', value: 6 },
  //   { label: 'Mobile', value: 9 },
  //   { label: 'Conversion', value: 9 },
  //   { label: 'Misc', value: 21 },
  //   { label: this.props.data[0][0], value: this.props.data[0][1].length},
  //   { label: 'DevOps', value: 22 },
  //   { label: 'Javascript', value: 23 },
  //   { label: 'Languages / Frameworks', value: 25 },
  //   { label: 'Front End', value: 26 },
  //   { label: 'Content', value: 26 },
  // ]}

/>
    )  
  }
}


export default Bubble

