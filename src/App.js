import './App.css';

function SiteWeatherOutputs(params) {
  return (
    <table>

      <tbody>
        <tr>
          <td>
            Temperature Results
        with Max Temperature: <input id="maxTemperatureInput"></input><button>Load</button>
          </td>
        </tr>
        <SiteWeatherOutputEntry name="Adelaide" maxTemperature="55"/>
        <SiteWeatherOutputEntry name="Melbourne" maxTemperature="45"/>
      </tbody>
    </table>
  )
}
function SiteWeatherOutputEntry(params) {
  return (
    <tr><td>{params.name}</td><td>{params.maxTemperature} degrees</td></tr>
  );
}

function SiteManagement(params) {
  return (
    <div>
      <div>
        Add / Remove Site
    </div>
      <div>
      Name: <input id="siteNameInput"></input><br />
      Latitude: <input id="siteLatitudeInput"></input> <br />
      Longitude: <input id="siteLongitudeInput"></input> <br />
      </div>
      <div>
      <button>Add</button><button>Remove</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">

      <SiteManagement />

      <div>
        <SiteWeatherOutputs />
      </div>

    </div>
  );
}

export default App;
