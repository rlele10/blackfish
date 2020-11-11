import React from 'react';
import { NavLink } from "react-router-dom";
import {  Table, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import { TableContainer } from '../styles/Table'



const ResultShow = props => {
  console.log(props)
 
    return (
      <>
        <TableContainer>
          <Table celled striped centered>
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
                <Table.Cell>{`${props.location.state.Panel_Test_Type} Result`}</Table.Cell>
                <Table.Cell> {props.location.state.Test_Result}  </Table.Cell>
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

