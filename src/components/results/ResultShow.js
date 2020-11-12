import React from 'react';
import { NavLink } from "react-router-dom";
import {  Table, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import { TableContainer } from '../styles/Table'



const ResultShow = props => {
  console.log(props)
 
    return (
      <>
        <Header as='h3' textAlign='center'>Confidential Test Report</Header>
        <TableContainer>
          <Table celled striped>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Full Name</Table.Cell>
                <Table.Cell>{props.location.state.Patient_First_Name}   {props.location.state.Patient_Last_Name}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Patient DOB</Table.Cell>
                <Table.Cell>{props.location.state.Patient_DOB_String}</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>Collection Date</Table.Cell>
                <Table.Cell> {props.location.state.Collection_Date}</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>Result Date</Table.Cell>
                <Table.Cell> {props.location.state.Report_Date}</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>Sample ID</Table.Cell>
                <Table.Cell> {props.location.state.Sample_ID}</Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell>{`${props.location.state.Panel_Test_Type} Result`}</Table.Cell>
                <Table.Cell style={{fontWeight: '900'}}> {props.location.state.Test_Result}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </TableContainer>

        <br></br>

        <div style={{textAlign: 'center'}}>
          <NavLink to="/" activeClassName="active" style={{fontSize: '1.25em', color: '#0058A2'}}>
          Go Back
          </NavLink>
        </div>
      </>
    
    );
};

export default ResultShow;

