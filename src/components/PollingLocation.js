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
      <h4 className="polling-location">
      {this.props.apiData.pollingLocations[0].address.locationName},
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
