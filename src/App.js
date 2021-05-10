import React from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

import SiteManagement from './Components/SiteManagement.jsx';
import WeatherFilterParameters from './Components/WeatherFilterParameters.jsx';
import SiteWeatherOutputs from './Components/SiteWeatherOutputs.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "siteResults" : []
    };
  }

  handleLoadResults(maxTemperatureInput) {
    const maxTemperature = Number(maxTemperatureInput);

    //Validate input parameters
    if (isNaN(maxTemperature)) {
      alert("Maximum Temperature must be a empty value or a numerical value");
      return
    }

    axios.get("/sites", {
      params: {
        "maxTemperature": maxTemperatureInput
      }
    }).then(function(res) {
      console.log(res.data);
      this.setState({
        "siteResults" : res.data
      });
    }.bind(this));
  }

  render() {
    return (
      <Container className="App">
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-4">Site Selector</h1>
            <p class="lead">Select activity site by weather filters.</p>
          </div>
        </div>
        <SiteManagement />
        <br />
        <WeatherFilterParameters onLoadResults={this.handleLoadResults.bind(this)} />
        <br />
        <SiteWeatherOutputs siteResults={this.state.siteResults} />
      </Container>
    );
  }
}

export default App;
