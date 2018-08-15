import React, {Component} from 'react';
import axios from 'axios';
import Endorsed from './Endorsed';
import PollingLocation from './PollingLocation';
import '../App.css';
import Autocomplete from 'react-google-autocomplete';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData:[],
      submitted: false,
      lat:"",
      lng:"",
      getError: false,

      senateEndorsementList: [['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['Tony Avella (Dem)','Avella is running for re-election for the NY State Senate - District 11 in Queens. He is an ardent supporter of the NYSNA and supported the “Safe Staffing for Quality Care Act” and the “NY Health Act.”'],['There are no NYSNA-endorsed candidates in this district',''],['Jose Peralta (Dem)','Peralta is running for re-election for the NY State Senate District 13 in Queens. As a huge advocate for Elmhurst Hospital, which is in his Senate district, he supported the “Safe Staffing for Quality Care Act,” and will continue to fight for nurses’ rights.'],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['Jesse Hamilton (Dem)','Hamilton is running for re-election in NY Senate District 20 in Central Brooklyn. A member of the Mental Health and Developmental Disabilities Committee, he has sponsored the “Safe Staffing for Quality Care Act”, the “NY Health Act” and has been a strong supporter of Interfaith Hospital, Maimonides Hospital and Kings County Hospital Center.'],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['Diane Savino (Dem)','Savino is running for re-election in NY State Senate - District 23 on Staten Island and South Brooklyn. She has been a fierce believer in increasing the quality of healthcare, including supporting nurses through the “Safe Staffing for Quality Act” and the “NY Health Act.”'],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['Marisol Alcantara (Dem)','Alcantara is running for re-election in NY State Senate District 31 in Upper Manhattan and the Bronx. As a former labor organizer for NYSNA, she is a proud sponsor of the "Safe Staffing for Quality Care Act" and the “NY Health Act.”'],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['Andrea Stewart-Cousins (Dem)','Stewart-Cousins is running for re-election for the NY State Senate in the 35th District in Westchester County, a seat she has held since 2012. She is a longtime supporter of safe staffing and the New York State Nurses Association and in May of 2015 lobbied alongside nurses and unions for the “Safe Staffing for Quality Care Act” and the “NY Health Act.” '],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['David Carlucci (Dem)','Carlucci is running for re-election for the NY State Senate in the 38th District in Westchester and Rockland counties, a position he has held since 2011. He proudly co-sponsored the “Safe Staffing for Quality Care Act” and the “NY Health Act” and continues to be a strong advocate for the New York State Nurses Association. David has stood side-by-side with the nurses at Westchester Medical Center and Nyack Hospital in their contract struggles and advocated for the Haitian nurses who were blatantly discriminated against in an advertisement for a nursing position in a Rockland newspaper. '],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['Tim Kennedy (Dem)','Kennedy is running for re-election for NY State Senate District 63, a seat in Buffalo he has held since 2013. He is a strong supporter of the “Safe Staffing for Quality Care Act”, “The NY Health Act”, and we are thrilled to endorse him for re-election.']],



      assemblyEndorsementList: [['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['Earlene Hopper (Dem)','Hopper is running for re-election in NY State Assembly - District 18.  She was also a supporter of safe staffing legislation and long-time supporter of nurses. '],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['Brian Barnwell (Dem)','Barnwell is running for re-election in NY State Assembly – District 30 in Queens. As the son and brother of 2 NYSNA members, he has spoken at NYSNA events where he demonstrated his support for nurses across New York State and co-sponsored the “Safe Staffing for Quality Care Act.”'],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['Ari Espinal (Dem)','Espinal is running for re-election for the NY State Assembly - District 39 in Queens. She is a strong supporter of the “Safe Staffing for Quality Care Act” and the “NY Health Act.”'],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['Rodneyse Bichotte (Dem)','Bichotte is running for reelection in NY Assembly District 42 in central Brooklyn. A former 1199SEIU organizer, Rodneyse has been a co-sponsor of the “Safe Staffing for Quality Care Act” and a member of the Health Committee, Assemblymember Bichotte has been a strong supporter of nurses and affordable healthcare for New Yorkers.'],['Diana Richardson (WFP)','Richardson is running for reelection in NY Assembly District 43 in Central Brooklyn. A co-sponsor of the “Safe Staffing for Quality Care Act” and a member of the Mental Health Committee, Assemblymember Richardson has been a strong advocate of nurses and affordable healthcare for New Yorkers.'],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['Mathylde Frontus (Dem)','Frontus is running for the open seat in NY State Assembly District 46 in South Brooklyn. She is a proud supporter of unions and the issues facing the nursing community. She will be a strong advocate for safe staffing and single payer healthcare legislation.'],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['Pat Kane (Dem)','NYSNA Treasurer Pat Kane is running in the NY State Assembly - District 61 on Staten Island. As a union advocate and registered nurse, there is no one more qualified than her to advocate and fight for nurses and patients in Albany.'],['Ashley Zanatta (Rep)','Ashley Zanatta is running in NY State Assembly - District 62 on Staten Island. As a self-described health care advocate, she has demonstrated her fierce support for nurses all across the state.'],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['Carmen de la Rosa (Dem)','De la Rosa is running for re-election in the Assembly 72nd District in upper Manhattan and was the second woman to represent the 72nd District. Assemblymember de la Rosa is a sponsor for the "Safe Staffing for Quality Care Act." She is an advocate for immigrant rights and criminal justice reform.'],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['Karines Reyes (Dem)','Reyes is running for the vacated seat in NY State Assembly District 87 in the Bronx. As a RN at Montefiore’s Weiler Hospital, there is no one better qualified to understand the issues facing NYSNA members and act as an advocate for better quality healthcare than her.'],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['Angelo Santabarbara (Dem)','Santabarbara is running for re-election for NY State Assembly’s 111th District, a seat he has held since 2013. He was a proud sponsor of the “Safe Staffing for Quality Care Act,” and remains an advocate for nurses across New York state every day. Santabarbara walked the picket lines during the strike at Nathan Littauer Hospital and stood with the nurses at Ellis Medicine during their contract negotiations.'],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],
                                   ['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district',''],['There are no NYSNA-endorsed candidates in this district','']]

    }
  };

performSearch(e) {
axios
.get(`https://www.googleapis.com/civicinfo/v2/voterinfo?address=` + this.state.lat + `,` + this.state.lng + `&electionId=2000&key=AIzaSyAPlYxnLNxkLrI1D4VUS1nyPRyEtW5VFGY`)
.then((response) => {
  this.setState({
    apiData:response.data,
    submitted:true
  })
  console.log(this.state.apiData);

})
.catch((err) => {
  console.log(err, "get not working", "apiData:", this.state.apiData);
  this.setState({
    getError: true
  })
})
}

onPlaceSelected(place) {
  place.geometry ?
  this.setState({
    lat: place.geometry.location.lat(),
    lng: place.geometry.location.lng(),
  }) : alert("Please Enter a Valid Address");
}


render() {

    if (!this.state.submitted) {
      return(

        <div>
        <h2>Finding Your Polling Place</h2>
          <h3>FIND YOUR POLLING LOCATION AND NYSNA ENDORSED CANDIDATE:</h3>
        <Autocomplete
        onPlaceSelected={this.onPlaceSelected.bind(this)}
        className="autocomplete"
        // onPlaceSelected={(place) => {
        //   this.setState({
        //     lat: place.geometry.location.lat(),
        //     lng: place.geometry.location.lng(),
        //   })

          // console.log(this.state.lat, this.state.lng);
        // }
      // }
        types={['geocode']}
        componentRestrictions={{country: "us"}}

    />
    <br />
    <button type="button" className="submit-button" value="Submit" onClick={this.performSearch.bind(this)} >
          SUBMIT
          </button>
      </div>

    )} else if(this.state.apiData.state[0].name!=="New York" || this.state.getError===true){
        return(
          <div>
          <h3>
            Please enter a full New York Address
          </h3>
          <h3>
            <a href="https://voterlookup.elections.ny.gov/">
            Click here to look up your polling location.
            </a>
          </h3>
          </div>
        )
    } else {
      return(
        <div>
          <PollingLocation apiData={this.state.apiData}/>
          <Endorsed apiData={this.state.apiData} senateEndorsementList={this.state.senateEndorsementList} assemblyEndorsementList={this.state.assemblyEndorsementList} />
        </div>
      )}
    }

}
export default Index
