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
      bodyFormData.set('habit', document.getElementById("habit").value);

    axios.post('http://9327f75a.ngrok.io/user', bodyFormData);
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Signup"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-7"]}
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
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          id: "name",
                          name: "name",
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
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
                      ncols={["col-md-4", "col-md-4"]}
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
                          id: "habit",
                          name: "habit",
                          label: "Habit",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Habit",
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
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Mike Andrew"
                userName="michael24"
                description={
                  ""
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
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
