import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';

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

export default SiteWeatherOutputs;