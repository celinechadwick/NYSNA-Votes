import React, { Component } from 'react';
import './App.css';
import Index from './components/Index';


class App extends Component {
  render() {
    return (
      <div>
      <div className="nav">
      <a href="https://www.nysna.org/" target="_blank">
        <img src="logo.png" className="nav-logo"/>
      </a>
      </div>
      <div className="post-nav">
        <Index />
        <hr className="style1"/>
        <h2>How to Vote</h2>
          <h3>IF YOU HAVE YET TO REGISTER TO VOTE:</h3>
            <p>
              All applications by mail must be postmarked no later than August 19, 2018 and received by a board of elections no later than August 24, 2018.
            </p>
            <p>
              In person registration can be done at your local board of elections or a state agency participating in the National Voter Registration Act before August 19, 2018.
            </p>
            <p>
            Any changes of address for registered voters must be received by a county board of elections by August 24, 2018.
            </p>
          <h3>IF YOU WISH TO CAST AN ABSENTEE BALLOT:</h3>
            <p>
            A letter requesting an Absentee Ballot must be received by your county board of elections after August 13, 2018 and before September 6, 2018. This letter must contain:
            </p>

            <ul>
              <li>The address where you are registered</li>

              <li>An address where the ballot is to be sent</li>

              <li>The reason for the request</li>

              <li>The signature of the voter</li>
            </ul>
            </div>
            </div>
    );
  }
}

export default App;
