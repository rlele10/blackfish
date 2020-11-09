import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Icon, Table } from 'semantic-ui-react'
const ResultShow = props => {
  console.log(props)
 

    return (
        <div>
    <Table celled>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Full Name</Table.Cell>
        <Table.Cell>{props.location.state.Patient_First_Name}   {props.location.state.Patient_Last_Name}</Table.Cell>
       </Table.Row>

      <Table.Row >
        <Table.Cell>Collection Date</Table.Cell>
        <Table.Cell> {props.location.state.Collection_Date}  </Table.Cell>
      </Table.Row>

      <Table.Row >
        <Table.Cell>Result Date</Table.Cell>
        <Table.Cell> {props.location.state.Report_Date}  </Table.Cell>
      </Table.Row>


      <Table.Row >
        <Table.Cell>Test Result</Table.Cell>
        <Table.Cell> {props.location.state.Test_Result}  </Table.Cell>
      </Table.Row>

    </Table.Body>
  </Table>
        <NavLink to="/" activeClassName="active">
        Go Back
      </NavLink>
     
        </div>
    
    );
};

export default ResultShow;