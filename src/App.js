
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function SiteWeatherOutputs(params) {
  return (
    <Container>
      <Row>
        <h2>Temperature Results</h2>
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

function WeatherFilterParameters(params) {
  return (
    <Container>
      <Row>
        <h3>Weather Filter Parameters</h3>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Max Temperature</Form.Label>
            <Form.Control placeholder="None" id="maxTemperatureInput" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>Load Results</Button>
        </Col>
      </Row>
    </Container>
  )
}
function SiteWeatherOutputEntry(params) {
  return (
    <tr>
      <td>{params.name}</td>
      <td>{params.latitude}</td>
      <td>{params.longitude}</td>
      <td>{params.maxTemperature} degrees</td>
    </tr>
  );
}

function SiteManagement(params) {
  return (
    <Container>
      <Row>
        <h3>Add / Remove Site</h3>
      </Row>

      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Name" id="siteNameInput" />
          </Col>
          <Col>
            <Form.Control placeholder="Latitude" id="siteLatitudeInput" />
          </Col>
          <Col>
            <Form.Control placeholder="Longitude" id="siteLongitudeInput" />
          </Col>
          <Col>
            <Button>Add</Button>&nbsp;
            <Button>Remove</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

function App() {
  return (
    <Container className="App">
      <h2>Site Weather</h2>
      <SiteManagement />
      <br />
      <WeatherFilterParameters />
      <br />
      <SiteWeatherOutputs />

    </Container>
  );
}

export default App;
