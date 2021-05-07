import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class SiteManagement extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        siteNameInputValue: "",
        siteLatitudeInputValue: "",
        siteLongitudeInputValue: ""
      }
    }
  
    handleAddOnClick() {
      const parentObjectReference = this;
      const name = this.state.siteNameInputValue;
      const latitude = Number(this.state.siteLatitudeInputValue);
      const longitude = Number(this.state.siteLongitudeInputValue);

      console.log(`Adding Site: ${name} at (${latitude},${longitude})`);
      
      // Validate Inputs
      if (name === "") {
        alert("Name must not be empty");
        return;
      }

      if (latitude === "" || isNaN(latitude) || !((latitude <= 90) && (latitude >= -90))) {
        alert("Latitude must be a numerical value between 90 and -90");
        return;
      }

      if (longitude === "" || isNaN(longitude) || !((longitude <= 180) && (longitude >= -180))) {
        alert("Longitude must be a numerical value between 180 and -180");
        return;
      }

      axios.put(`/sites/${encodeURIComponent(name)}`, {
        "latitude": latitude,
        "longitude": longitude
      }).then(function (res) {
        console.log(res);
        parentObjectReference.setState({
          siteNameInputValue: "",
          siteLatitudeInputValue: "",
          siteLongitudeInputValue: ""
        })
      })
    }
  
    handleRemoveOnClick() {
      const parentObjectReference = this;
      const name = this.state.siteNameInputValue
      console.log(`Removing Site: ${name}`);

      // Validate Inputs
      if (name === "") {
        alert("Name must not be empty");
        return;
      }

      axios.delete(`sites/${encodeURIComponent(name)}`).then(function(res) {
        console.log(res);
        parentObjectReference.setState({
          siteNameInputValue: "",
          siteLatitudeInputValue: "",
          siteLongitudeInputValue: ""
        })
      })

    }
  
    render() {
      return (
        <Container>
          <Row>
            <h3>Add / Remove Site</h3>
          </Row>
  
          <Form>
            <Row>
              <Col>
                <Form.Control
                  placeholder="Name"
                  value={this.state.siteNameInputValue} 
                  onChange={event => this.setState({ siteNameInputValue: event.target.value })} />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Latitude"
                  value={this.state.siteLatitudeInputValue}
                  onChange={event => this.setState({ siteLatitudeInputValue: event.target.value })} />
              </Col>
              <Col>
                <Form.Control 
                  placeholder="Longitude"
                  value={this.state.siteLongitudeInputValue}
                  onChange={event => this.setState({ siteLongitudeInputValue: event.target.value })} />
              </Col>
              <Col>
                <Button onClick={this.handleAddOnClick.bind(this)}>Add</Button>&nbsp;
              <Button onClick={this.handleRemoveOnClick.bind(this)}>Remove</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      )
    }
  }

  export default SiteManagement;