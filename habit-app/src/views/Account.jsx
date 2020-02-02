import React, { Component } from "react";
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

export default class Account extends Component {
    render(){
        return(
            <div className="content">
            <Grid fluid>
            <Row>
            <Col md={4}>
              <UserCard
                bgImage="https://media.istockphoto.com/vectors/sky-and-clouds-background-sky-and-cloud-with-blue-color-cartoon-vector-id1084416182?k=6&m=1084416182&s=170667a&w=0&h=QuYlwwQlouomtfF0Le4RVveL-VhTVQHwj33bFwBaczI="
                avatar="https://pbs.twimg.com/profile_images/3667822363/e2ea272549519bcdaaf327b0ddb31647_400x400.jpeg"
                name="Kevin Nguyen"
                userName="@knu98"
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
        )
    }
}