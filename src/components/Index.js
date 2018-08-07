import React, {Component} from 'react';
import axios from 'axios';
import Endorsed from './Endorsed';
import PollingLocation from './PollingLocation';
import '../App.css';



class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData:[],
      submitted: false,
      streetName:"",
      zipCode:"",
      senateEndorsementList:['There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','James Gaughran (DEM/WF/WEP) ','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','John Brooks (Dem/WFP) ','Todd Kaminsky (Dem/WFP) ','James Sanders (Dem/WFP ) ','Tony Avella (Dem/Ind/Ref) ','Michael Ganaris (Dem) ','Jose Peralta (Dem) ','Leroy Comrie (Dem/WFP) ','Joseph Addabbo (Dem) ','Toby Ann Stavisky (Dem ) ','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','Roxanne J. Persaud (Dem) ','Jessie Hamilton (Dem) ','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','Diane Savino (Dem/Ind) ','Andrew Lanza (Rep/Conserv/Ind) ','Velmanette Montgomery (Dem/WFP) ','Brian Kavanaugh (Dem/WFP) ','Brad Hoylman (Dem/WFP) ','Liz Kruger (Dem/WEP ) ','Jose Serrano (Dem/WFP) ','Brian Benjamin (Dem) ','Alcantera Marisol (Dem) ','Luis Sepulveda (Dem/WEP) ','Gustavo Rivera (Dem/WFP) ','There are no NYNSA endorsed candidates in this district.','Andrea Stewart-Cousins (Dem/WFP/Ind/WEP) ','Jamaal T. Bailey (Dem) ','Mayer Shelly (Dem/WFP/WEP) ','David Carlucci (Dem/Ind/WEP) ','James Skoudis (Dem/WFP/WEP/REF/IND) ','Terrance Murphy (Rep/Conserv/Ind) ','Susan Serino (Rep/Conserv/Ind) ','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','Neil Breslin (Dem/WFP/Ind) ','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','Joyce St. George (Dem/WF/WEP) ','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','Joan Seamans (Dem/WFP/WE) ','There are no NYNSA endorsed candidates in this district.','Timothy Kennedy (Dem/WFP/Ind )'],

      assemblyEndorsementList: ['Fred Thiele (Dem)','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','Steven Englebright (Dem) ','Doug Smith (Rep ) ','Phillip Ramos (Dem) ','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','Christine Pellegrino (Dem) ','Steven Stern (Dem) ','Kimberly Jean-Pierre (Dem) ','Andrew Raia (Rep) ','Charles Lavine (Dem) ','Michael Reid (Dem) ','Allen Foley (Dem/WFP) ','Anthony D\'Urso (Dem) ','There are no NYNSA endorsed candidates in this district.','Earlene Hooper (Dem) ','Ed Ra (Dem) ','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','Michaella Solages (Dem) ','Stacy Pheffer-Amato (Dem) ','David Weprin (Dem) ','Nily Rozic (Dem) ','Ed Braunstein (Dem) ','Daniel Rosenthal (Dem) ','Andrew Hevesi (Dem) ','Alicia Hyndman (Dem) ','Brian Barnwell (Dem ) ','Michelle Titus (Dem) ','Vivian Cook (Dem) ','Clyde Vanel (Dem) ','Michael DanDekker (Dem) ','Jeffrion Aubry (Dem) ','Aravella Simotas (Dem) ','Catherine Nolan (Dem) ','Michael Miller (Dem) ','Ari Espinal (Dem/WE) ','Ron Kim (Dem) ','Helene Weinstein (Dem) ','Rodneyse Bichotte (Dem) ','Diana Richardson (Dem) ','Robert Carroll (Dem/WFP) ','Steven Cymbrowtiz (Dem) ','Mathylde Frontus (Dem) ','William Colton (Dem) ','Simcha Eichenstein (Dem) ','Peter Abbate Jr. (Dem) ','Joseph Lentol (Dem) ','Feliz Ortiz (Dem) ','Jo Ann Simon (Dem) ','Maritza Davila (Dem) ','Erik Dilan (Dem) ','Latrice Walker (Dem) ','Tremaine Wright (Dem) ','Walter Mosley (Dem) ','Nick Perry (Dem) ','Jaime Williams (Dem) ','Charles Baron (Dem) ','Patricia Kane (Dem) ','Ashley Zanatta (Rep/Dem/Reform) ','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','Yuh-Line Niou (Dem/WFP) ','Deborah Glick (Dem) ','Linda Rosenthal (Dem) ','There are no NYNSA endorsed candidates in this district.','Daniel O\'Donnell (Dem) ','Inez Dinckens (Dem) ','Al  Taylor (Dem) ','Carmen De LaRosa (Dem/WFP) ','Daniel Quart () ','Harvey Epstein (Dem/WF) ','Richard Gottfried () ','Rebecca Seawright () ','Latoya Joyner () ','Jose  Rivera () ','Michael Blake () ','Nathalia Fernandez (Dem/Ind) ','Jeffrey Dinowitz (Dem) ','Michael Benedetto () ','Carl Heastie () ','There are no NYNSA endorsed candidates in this district.','Marcos Crespo (Dem) ','Victor Pichardo (Dem) ','Karines Reyes (Dem) ','Amy Paulin (Dem) ','Gary Pretlow (Dem) ','Anthony Nicodemo (Dem/WEP/WEP) ','Steven Otis (Dem) ','Thomas Abinanti (Dem) ','David Buchwald (Dem) ','Kevin Byrne (Rep/Con/Ind) ','Sandra Galef (Dem) ','Kenneth Zebrowski (Dem) ','Ellen Jaffee (Dem) ','Karl Brabenec (Rep) ','There are no NYNSA endorsed candidates in this district.','Aileen Gunther (Dem) ','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','Kevin Cahill (Dem) ','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','Didi Barrett (Dem) ','Tistrya Houghyslinh (Dem) ','There are no NYNSA endorsed candidates in this district.','Patricia Fahy (Dem/WFP/Ind) ','Phillip Steck (WFP/Ind/REF/WEP) ','Angelo Santabarbara (Dem/Ind/WFP/WEP/Ref.) ','There are no NYNSA endorsed candidates in this district.','Carrie Woemer (Dem/Inc/WEP) ','There are no NYNSA endorsed candidates in this district.','Billy Jones (Dem) ','Addie Jenne (Dem) ','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','William Magee (Dem) ','There are no NYNSA endorsed candidates in this district.','Donna Lupardo (Dem) ','There are no NYNSA endorsed candidates in this district.','Barbara Lifton (Dem) ','There are no NYNSA endorsed candidates in this district.','Albert Stirpe (Dem) ','Pamela Hunter (Dem) ','William Magnarelli (Dem) ','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','David Gantt (Dem) ','Harry Bronson (Dem) ','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','Crystal Peoples-Stokes (Dem/WEF) ','There are no NYNSA endorsed candidates in this district.','Monica Wallace (Dem/WFP/WEP) ','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','There are no NYNSA endorsed candidates in this district.','Sean Ryan (Dem) ','There are no NYNSA endorsed candidates in this district.']

    }
  };

performSearch(e) {
console.log(this.state.streetName, "streetName", this.state.zipCode, "zip code");
axios
.get(`https://www.googleapis.com/civicinfo/v2/voterinfo?address=` + this.state.streetName + this.state.zipCode + `&electionId=2000&key=AIzaSyAPlYxnLNxkLrI1D4VUS1nyPRyEtW5VFGY`)
.then((response) => {
  this.setState({
    apiData:response.data,
    submitted:true
  })
  console.log(this.state.apiData.contests[5].office);

})
.catch((err) => {
  console.log(err, "get not working", "apiData:", this.state.apiData);
})
}

// console.log(this.state.apiData, "all api data");
// console.log(this.state.apiData.line1, "line1");
// console.log(this.state.apiData.city, "city");
// console.log(this.state.apiData.state, "state");
updateAddress(e) {
  this.setState({
    streetName: e.target.value
  });

}

updateZip(e) {
  this.setState({
    zipCode:e.target.value
  })
}

render() {

    if (!this.state.submitted) {
      return(
        <div>
          <h2>Finding Your Polling Place</h2>
          <h3>FIND YOUR POLLING LOCATION AND NYSNA ENDORSED CANDIDATE:</h3>
          <form onSubmit={this.performSearch.bind(this)}>
          <label>
            Street Address:
          <br/>
          <input type="text" id="address" onChange={this.updateAddress.bind(this)} required />
          <br/>
            Zip Code:
          <br/>
          <input type="number"  id="zip"  onChange={this.updateZip.bind(this)} required/>
          <br/>
          City:
          <br/>
          <input type="text"  required />
          <br/>
          <br/>
          <button type="button" className="submit-button" value="Submit" onClick={this.performSearch.bind(this)} >
          SUBMIT
          </button>
          </label>
        </form>
      </div>


    )} else {
      return(
        <div>
          <PollingLocation apiData={this.state.apiData}/>
          <Endorsed apiData={this.state.apiData} senateEndorsementList={this.state.senateEndorsementList} assemblyEndorsementList={this.state.assemblyEndorsementList} />
        </div>
      )
    }
  }
}
export default Index
