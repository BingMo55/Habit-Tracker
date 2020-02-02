import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { FormControl } from "@material-ui/core";
import axios from 'axios';


export default class Habits extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('data'))
          };
        this.handleChange = this.handleChange.bind(this);
        this.addHabit = this.addHabit.bind(this);
     }
    handleChange() {
        const value = this.textInput.current.value;
    }
    addHabit(){
        var textInput = document.getElementById("input").value; 
        var bodyFormData = new FormData();
        bodyFormData.set('email', this.state.user.email);
        bodyFormData.set('habit', textInput);
        axios.post('http://052f0d15.ngrok.io/addhabit',bodyFormData);
        window.location.reload();
    }
    render(){

        return(
            <Grid fluid>
            <Row>
            <div class="col-md-4 col-md-offset-4">
              <Card
                title="Habits"
                category="Check-in"
                stats="Updated just now"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            <FormControl ref={this.textInput} type="text">
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Add Habit</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" cols="999"id="input"></textarea>
            </div>
              <Button onClick={()=>(this.addHabit())}>Add Habit</Button>
            </FormControl >
            </div>
            </Row>
            </Grid>
        )
    }
}