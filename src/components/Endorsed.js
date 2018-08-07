import React, {Component} from 'react';
import '../App.css';



class Endorsed extends Component {
  constructor(props) {
    super(props);

  }
//this.state.apiData.contests[5].office

render() {
  for (var i=0; i < this.props.apiData.contests.length; i++) {
    if(this.props.apiData.contests[i].district.scope === "stateUpper") {
      var stateSenateDistrict = this.props.apiData.contests[i].office;
      var senateDistrictNumber= stateSenateDistrict.substr(stateSenateDistrict.length-3);
      var newStateSenateDistrict = this.props.senateEndorsementList[senateDistrictNumber-1];
      return(
        <div>
          <h3 className="polling-h3">NYSNA has endorsed the following candidates in your elections:</h3>
          <ul>
            <li> Governor: Andrew Cuomo (Dem)</li>
            <li>{newStateSenateDistrict}</li>
            <li>{newStateAssemblyDistrict}</li>
          </ul>
        </div>
      )
    } else if (this.props.apiData.contests[i].district.scope === "stateLower"){
      var stateAssemblyDistrict = this.props.apiData.contests[i].office;
      var assemblyDistrictNumber= stateAssemblyDistrict.substr(stateAssemblyDistrict.length-3);
      var newStateAssemblyDistrict=  this.props.assemblyEndorsementList[assemblyDistrictNumber-1];
      return(
        <div>
        {newStateAssemblyDistrict}
        </div>
      )
    } else {
      return(
        <div>
          <p>We could not find polling place for: 30 Newport Parkway Jersey City, NJ 07310.</p>
           <a href="https://voterlookup.elections.ny.gov/">Please click here to look up your polling location.</a>

        </div>
      )
    }
  }

}

}


export default Endorsed;
