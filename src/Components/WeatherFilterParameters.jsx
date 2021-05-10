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
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Weather Filter Parameters</h3>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Max Temperature</Form.Label>
                  <Form.Control
                    placeholder="None"
                    value={this.state.maxTemperatureInputValue}
                    onChange={event => this.setState({ maxTemperatureInputValue: event.target.value })} />
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Button onClick={() => { this.props.onLoadResults(this.state.maxTemperatureInputValue) }}>Load Results</Button>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    )
  }
}

export default WeatherFilterParameters;