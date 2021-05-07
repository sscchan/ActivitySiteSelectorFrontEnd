import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import SiteManagement from './Components/SiteManagement.jsx'

function SiteWeatherOutputs(props) {
  return (
    <Container>
      <Row>
        <h2>Results</h2>
      </Row>

      <Row>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Max Temperature</th>
            </tr>
          </thead>
          <tbody>
            {
              props.siteResults.map(function(site, index) {
                return (<SiteWeatherOutputEntry key={index} name={site.name} latitude={site.latitude} longitude={site.longitude} maxTemperature={site.maxTemperature} />);
              })
            }
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}

function SiteWeatherOutputEntry(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.latitude}</td>
      <td>{props.longitude}</td>
      <td>{props.maxTemperature}</td>
    </tr>
  );
}

class WeatherFilterParameters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxTemperatureInputValue: ""
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <h3>Weather Filter Parameters</h3>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Max Temperature</Form.Label>
              <Form.Control
                placeholder="None"
                value={this.state.maxTemperatureInputValue} 
                onChange={event => this.setState({maxTemperatureInputValue: event.target.value})}/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => {this.props.onLoadResults(this.state.maxTemperatureInputValue)}}>Load Results</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "siteResults" : []
    };
  }

  handleLoadResults(maxTemperatureInput) {
    const parentObjectReference = this;
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
      parentObjectReference.setState({
        "siteResults" : res.data
      });
    });
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
