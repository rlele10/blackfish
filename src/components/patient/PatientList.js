import React from 'react';

const PatientList = props => {
  console.log(props)
  const patientRecords = [...props.location.state.Tests];
  const listPatientRecords = patientRecords.map((patientRecord) => 
    <ul>{patientRecord}</ul>
  );

    return (
      <>
        {listPatientRecords}
      </>
    );
};

export default PatientList;