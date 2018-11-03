import React from 'react'
import DateTimePicker from 'react-datetime-picker'

class Timing extends React.Component{


  render() {
    return(
      <div className="react-component">
        <DateTimePicker  onChange={this.props.onDateChange} value={this.props.date}/>
      </div>
 
    )
  }
}


export default Timing