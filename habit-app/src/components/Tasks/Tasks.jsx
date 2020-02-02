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
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import Habits from "../../views/Habits";


export class Tasks extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem('data'))
    };
}

  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
    });
  };

  addNew(param){
    this.state.tasks.push(param);
  }

  render() {
    //const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    var tasks_title = [
      "Cold showers",
      "Running",
      "Meditation",
      "Reading"
    ];
    var tasks = [];
    var number;
    var habit;
    if (this.state.user && this.state.user.habit){
      var formData = new FormData();
      formData.set('email', this.state.user.email)
      axios.post('http://052f0d15.ngrok.io/loadhabits', formData).then(function(response){
        console.log(response);
        localStorage.setItem('habits', (response.data['response']));
      })
      var arr = localStorage.getItem('habits');
      var res =  (this.state.user.habit.length > 0) ? arr.split(",") : [];
      console.log(res);
  
      //tasks_title.push(arr); 
  
      for (var i = 0; i<res.length; i++){
        tasks_title.push(res[i]);
      }
    }


    for (var i = 0; i < tasks_title.length; i++) {
      number = "checkbox" + i;
      tasks.push(
        <tr key={i}>
          <td>
            <Checkbox
              number={number}
              habit={tasks_title[i]}
            />
          </td>
          <td>{tasks_title[i]}</td>
          <td className="td-actions text-right">
            {/* <OverlayTrigger placement="top" overlay={edit}>
              <Button bsStyle="info" simple type="button" bsSize="xs">
                <i className="fa fa-edit" />
              </Button>
            </OverlayTrigger> */}

            {/* <OverlayTrigger placement="top" overlay={remove}>
              <Button bsStyle="danger" simple type="button" bsSize="xs">
                <i className="fa fa-times" />
              </Button>
            </OverlayTrigger> */}
          </td>
        </tr>
      );
    }
    return <tbody>{tasks}
    </tbody>;
  }
}

export default Tasks;
