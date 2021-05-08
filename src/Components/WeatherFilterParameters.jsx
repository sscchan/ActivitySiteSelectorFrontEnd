import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

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

export default WeatherFilterParameters;