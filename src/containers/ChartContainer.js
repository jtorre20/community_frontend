import React from 'react'
import Chart from '../components/chart'

class ChartContainer extends React.Component{


  
  render() {
    return (   
    <div>
      < Chart resultsData={this.props.chartData} />
    </div>

    )   
  }
}

export default ChartContainer