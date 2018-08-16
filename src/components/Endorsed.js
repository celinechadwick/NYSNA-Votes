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
      var senateDistrictNumber = stateSenateDistrict.substr(stateSenateDistrict.length-3);
      var newStateSenateDistrict = this.props.senateEndorsementList[senateDistrictNumber-1][0];
      var newStateAssemblyDistrict = this.props.assemblyEndorsementList[i];
      var stateSenateBlurb = this.props.senateEndorsementList[senateDistrictNumber-1][1];

    } else if (this.props.apiData.contests[i].district.scope === "stateLower"){
      var stateAssemblyDistrict = this.props.apiData.contests[i].office;
      var assemblyDistrictNumber = stateAssemblyDistrict.substr(stateAssemblyDistrict.length-3);
      var newStateAssemblyDistrict =  this.props.assemblyEndorsementList[assemblyDistrictNumber-1][0];
      var stateAssemblyBlurb = this.props.assemblyEndorsementList[assemblyDistrictNumber-1][1];


    }
  }
  return(
    <div>
      <h3 className="polling-h3">NYSNA has endorsed the following candidates in your elections:</h3>

        <p> Governor: Andrew Cuomo (Dem)</p>
        <p>{stateSenateDistrict ? stateSenateDistrict + `: ` + newStateSenateDistrict  : <a href="https://nysna-votes.squarespace.com/s/Endorsed-Senate-Candidates.pdf">See full list of NYSNA-Endorsed State Senate Candidates</a>}</p>
          <p className="blurb">{stateSenateBlurb ? stateSenateBlurb : ``}</p>
        <p>{stateAssemblyDistrict ? stateAssemblyDistrict + `: ` + newStateAssemblyDistrict : <a href="https://nysna-votes.squarespace.com/s/Endorsed-Senate-Candidates.pdf">See full list of NYSNA-Endorsed State Assembly Candidates</a>}</p>
          <p className="blurb">{stateAssemblyBlurb ? stateAssemblyBlurb : ``}</p>

    </div>
  )

}

}


export default Endorsed;
