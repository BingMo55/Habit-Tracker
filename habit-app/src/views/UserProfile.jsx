/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import axios from 'axios';

import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class UserProfile extends Component {

  axios = require('axios');
  
  makePostRequest() {
    console.log('test');
    var bodyFormData = new FormData();

    bodyFormData.set('username', document.getElementById("username").value);
    bodyFormData.set('email', document.getElementById("email").value);
    bodyFormData.set('name', document.getElementById("name").value);
    bodyFormData.set('number', document.getElementById("number").value);
    bodyFormData.set('password', document.getElementById("password").value);

    axios.post('http://052f0d15.ngrok.io/user', bodyFormData);
    this.props.history.push('/admin/logins');
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Registration"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          id: "name",
                          name: "name",
                          label: "Full name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Name",
                        },
                        {
                          id: "number",
                          name: "number",
                          label: "Phone Number",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Phone Number",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          name: "username",
                          label: "Username",
                          type: "text",
                          id: "username",
                          bsClass: "form-control",
                          placeholder: "Username",
                        },
                        {
                          id: "email",
                          name: "email",
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email"
                        }
                      ]}
                    />
                    {/* <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Address",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Home Adress",
                        }
                      ]}
                    /> */}
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          id: "password",
                          name: "password",
                          label: "Password",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Password",
                        },
                        {
                          name: "cpassword",
                          label: "Confirm Password",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Confirm Password",
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill onClick={() => {this.makePostRequest()}}>
                      Register
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
