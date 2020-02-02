import React, { Component } from "react";
import {Switch, Router} from 'react-router-dom';

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
import Button from "components/CustomButton/CustomButton.jsx";


export default class Login extends Component{
    route(param){
        this.props.history.push(param);
    }
    signIn(){
        localStorage.clear();
        var bodyFormData = new FormData();
        bodyFormData.set('email', document.getElementById("email").value);
        bodyFormData.set('password', document.getElementById("password").value);
        axios.post('http://052f0d15.ngrok.io/login', bodyFormData).then(function(response){
            console.log(response);
            localStorage.setItem('data', JSON.stringify(response.data));
            
        }).catch(function(error){
            console.log(error);
        });
        this.props.history.push('/admin/dashboard');
    }
    render(){
        return(
            <div className="content">
                <div className="content">
                    <Grid fluid>
                    <Row>
                        <Col md={8}>
                        <Card
                            title="Login"
                            content={
                            <form>
                                <FormInputs
                                ncols={["col-md-6", "col-md-5"]}
                                properties={[
                                    {
                                    name: "email",
                                    label: "email",
                                    type: "text",
                                    id: "email",
                                    bsClass: "form-control",
                                    placeholder: "Email",
                                    },
                                    {
                                    id: "password",
                                    name: "password",
                                    label: "Password",
                                    type: "text",
                                    bsClass: "form-control",
                                    placeholder: "Password",
                                    }
                                ]}
                                />
                                <Button bsStyle="info" pullLeft fill onClick={()=>(this.signIn())}>
                                Sign in</Button>
                                <Button bsStyle="info" fill onClick={()=>(this.route('/admin/user'))}>
                                Register</Button>
                            </form>
                            }
                        />
                        </Col>
                    </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}