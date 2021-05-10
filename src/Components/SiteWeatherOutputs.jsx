import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';

function SiteWeatherOutputs(props) {
  return (
    <Container>
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Results</h2>

          <div>
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
                    props.siteResults.map(function (site, index) {
                      return (<SiteWeatherOutputEntry key={index} name={site.name} latitude={site.latitude} longitude={site.longitude} maxTemperature={site.maxTemperature} />);
                    })
                  }
                </tbody>
              </Table>
          </div>
        </div>
      </div >
    </Container >
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