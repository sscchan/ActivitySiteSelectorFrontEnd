import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';

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
            <SiteWeatherOutputEntry name="Adelaide" latitude="-32" longitude="55" maxTemperature="55" />
            <SiteWeatherOutputEntry name="Melbourne" latitude="-32" longitude="55" maxTemperature="45" />
            <SiteWeatherOutputEntry name="Sydney" latitude="-32" longitude="55" maxTemperature="45" />
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
      <td>{props.maxTemperature} degrees</td>
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
  handleLoadResults(maxTemperatureInput) {
    console.log("Load Results clicked" + maxTemperatureInput);
  }

  render() {
    return (
      <Container className="App">
        <h2>Site Weather</h2>
        <SiteManagement />
        <br />
        <WeatherFilterParameters onLoadResults={this.handleLoadResults} />
        <br />
        <SiteWeatherOutputs />

      </Container>
    );
  }
}

export default App;
