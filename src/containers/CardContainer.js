import React from 'react'

Number.prototype.toFixedDown = function(digits) {
  var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
      m = this.toString().match(re);
  return m ? parseFloat(m[1]) : this.valueOf();
};

class CardContainer extends React.Component{
  constructor(props) {
    super(props)
    // console.log(props)

    this.state = {
      mood:""
    }
  }



  
  render() {
    if (!this.props.results || this.props.results.text === "") {
      return (
        <div className="center-screen center-align">
        <div className="row">
          <div className="col">
            <div className="card positive">
            <img className="card-img-top" src={require("../sentiment-positive-face.jpeg")} alt="Positive"/>
              <div className="card-body">
                <h4 className="center-align white-text">0</h4>
                  <span className="card-title white-text truncate">POSITIVE</span>
              </div>
            </div>
          </div>
  
     
  
          <div className="col">
            <div className="card neutral">
            <img className="card-img-top" src={require("../sentiment-neutral-face.jpeg")} alt="Neutral"/>
              <div className="card-body">
                <h4 className="center-align white-text">0</h4>
                <span className="card-title white-text truncate">NEUTRAL</span>  
              </div>
            </div>
          </div>
  
          <div className="col">
            <div className="card negative">
            <img className="card-img-top" src={require("../sentiment-negative-face.jpeg")} alt="Negative"/>
              <div className="card-body">
                <h4 className="center-align white-text">0</h4>
                <span className="card-title white-text truncate">NEGATIVE</span>  
              </div>
            </div>
          </div>
        </div>
      </div>

      )
    } else {
      
      return(
        // {this.props.results.polarity === "positive" ? }
        <div className="center-screen center-align">
          <div className="row">
            <div className="col">
              <div className="card positive">
              <img className="card-img-top" src={require("../sentiment-positive-face.jpeg")} alt="Positive"/>
                <div className="card-body">
                  <h4 className="center-align white-text"> {this.props.results.text.polarity === "positive" ? 
                  this.props.results.text.polarity_confidence.toFixedDown(3) :
                  null }
                  </h4>
                    <span className="card-title white-text truncate">POSITIVE</span>
                </div>
              </div>
            </div>
    
       
    
            <div className="col">
              <div className="card neutral">
              <img className="card-img-top" src={require("../sentiment-neutral-face.jpeg")} alt="Neutral"/>
                <div className="card-body">
                  <h4 className="center-align white-text"> {this.props.results.text.polarity === 'neutral' ?
                  this.props.results.text.polarity_confidence.toFixedDown(3) :
                  null } 
                  </h4>
                    <span className="card-title white-text truncate">NEUTRAL</span>  
                </div>
              </div>
            </div>
    
            <div className="col">
              <div className="card negative">
              <img className="card-img-top" src={require("../sentiment-negative-face.jpeg")} alt="Negative"/>
                <div className="card-body">
                  <h4 className="center-align white-text"> {this.props.results.text.polarity === 'negative' ?
                  this.props.results.text.polarity_confidence.toFixedDown(3) : 
                  null } 
                  </h4>
                    <span className="card-title white-text truncate">NEGATIVE</span>  
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      
    }
    
  }
}

export default CardContainer