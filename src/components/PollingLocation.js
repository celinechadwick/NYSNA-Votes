import React, {Component} from 'react';
import '../App.css';



class PollingLocation extends Component {
  constructor(props) {
    super(props);

  }


render() {

  if (!this.props.apiData || this.props.apiData.pollingLocations === undefined) {
  return(
    <div>
      <h1>
      Could Not Find Polling Place For:
      </h1>
      <h4 className="polling-location">{this.props.apiData.normalizedInput.line1 + ` ` + this.props.apiData.normalizedInput.city + `, ` + this.props.apiData.normalizedInput.state}</h4>
        <p> Please make sure you are entering a valid New York State Address</p>
    </div>
)} else {
  return(
    <div>
      <h2> Your Polling Location is:</h2>
      <h4 className="polling-location">
      <strong>{this.props.apiData.pollingLocations[0].address.locationName}</strong>
      <br />
      {` ` + this.props.apiData.pollingLocations[0].address.line1 + ` `}
      {this.props.apiData.pollingLocations[0].address.city + ` `}
      {this.props.apiData.pollingLocations[0].address.state + `, `}
      {this.props.apiData.pollingLocations[0].address.zip}
      </h4>

    </div>
  )
}


}

}


export default PollingLocation;
