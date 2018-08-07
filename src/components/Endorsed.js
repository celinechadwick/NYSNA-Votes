import React, {Component} from 'react';
import '../App.css';



class Endorsed extends Component {
  constructor(props) {
    super(props);

  }
//this.state.apiData.contests[5].office

render() {
  for (var i=0; i < this.state.apiData.length; i++) {
    if(this.state.apiData.contests[i].district.scope === "stateUpper") {
      var stateSenateDistrict = this.state.apiData.contests[i].office;
      var senateDistrictNumber= stateSenateDistrict.substr(stateSenateDistrict.length-3);
      var newStateSenateDistrict = this.props.senateEndorsementList[senateDistrictNumber-1];
      return(
        <div>
        {newStateSenateDistrict}
        </div>
      )
    } else if (this.state.apiData.contests[i].district.scope === "stateLower"){
      var stateAssemblyDistrict = this.state.apiData.contests[i].office;
      var assemblyDistrictNumber= stateAssemblyDistrict.substr(stateAssemblyDistrict.length-3);
      var newStateAssemblyDistrict=  this.props.assemblyEndorsementList[assemblyDistrictNumber-1];
      return(
        <div>
        {newStateAssemblyDistrict}
        </div>
      )
    }
  }

}

}


export default Endorsed;
