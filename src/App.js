import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
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
        <h2>Site Weather</h2>
        <SiteManagement />
        <br />
        <WeatherFilterParameters onLoadResults={this.handleLoadResults.bind(this)} />
        <br />
        <SiteWeatherOutputs siteResults={this.state.siteResults}/>

      </Container>
    );
  }
}

export default App;
