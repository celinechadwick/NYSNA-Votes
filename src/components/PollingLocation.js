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
      Error while trying to fetch polling place
      </h1>
    </div>
)} else {
  return(
    <div>
      <h2> Your Polling Location is:</h2>
      <h3>{this.props.apiData.pollingLocations[0].address.locationName}</h3>
      <h3>{this.props.apiData.pollingLocations[0].address.line1}</h3>
      <h3>{this.props.apiData.pollingLocations[0].address.city}</h3>
      <h3>{this.props.apiData.pollingLocations[0].address.state}</h3>
      <h3>{this.props.apiData.pollingLocations[0].address.zip}</h3>
    </div>
  )
}


}

}


export default PollingLocation;
