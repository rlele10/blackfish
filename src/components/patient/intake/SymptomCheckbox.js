import React, { useState } from 'react';
import { CheckboxInput, CheckboxLabel } from '../../styles/Checkbox'


  const symptomList = [
    'None',
    'Fever or Chills',
    'Cough',
    'Deficiencies of the immune system or HIV',
    'Diabetes',
    'Kidney Disease requiring dialysis',
    'Moderate to severe Asthma',
    'Obesity',
    'Organ or bone marrow transplant',
    'Serious heart conditions',
    'Sickle cell, thalassemia, or other hemoglobin disease',
    'Taking medications that weakens the immune system (such as steroids)'
  ];

  // const symptomCheckboxes = [
  //   { key: '0', text: 'None', value: 'none'},
  //   { key: '1', text: 'Fever or Chills', value: 'fever_chills'},
  //   { key: '2', text: 'Cough', value: 'cough'},
  //   { key: '3', text: 'Shortness of breath or difficulty breathing', value: 'breathing'},
  //   { key: '4', text: 'Fatigue', value: 'fatigue'},
  //   { key: '5', text: 'Muscle or body aches', value: 'aches'},
  //   { key: '6', text: 'Headache', value: 'headache'},
  //   { key: '7', text: 'New loss of taste or smell', value: 'taste_smell'},
  //   { key: '8', text: 'Sore throat', value: 'sore_throat'},
  //   { key: '9', text: 'Congestion or runny nose', value: 'congestion_runny_nose'},
  //   { key: '10', text: 'Nausea or vomiting', value: 'nausea_vomiting'},
  //   { key: '11', text: 'Diarrhea', value: 'diarrhea'},
  // ]

  const getDefaultCheckboxes = () =>
    symptomList.map(checkbox => ({
      name: checkbox,
      checked: false,
    }));

   function useCheckboxes(defaultCheckboxes) {
    const [checkboxes, setCheckboxes] = useState(
      defaultCheckboxes || getDefaultCheckboxes(),
    );

    function setCheckbox(index, checked) {
      const newCheckboxes = [...checkboxes];
      newCheckboxes[index].checked = checked;
      setCheckboxes(newCheckboxes);
    }
    return {
      setCheckbox,
      checkboxes,
    };
  }

   function Checkboxes({ checkboxes, setCheckbox }) {
    return (
      <>
        {checkboxes.map((checkbox, i) => (
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={checkbox.checked}
              onChange={e => {
                setCheckbox(i, e.target.checked);
              }}
            />
            {checkbox.name}
          </CheckboxLabel>
        ))}
      </>
    );
  }

  export default function SymptomCheckboxes() {
    const checkboxes = useCheckboxes();
    return (
      <div>
        <Checkboxes {...checkboxes} />
        {/* <span>
          Value:
          {checkboxes.checkboxes
            .filter(t => t.checked)
            .map(checkbox => checkbox.name)
            .join(', ')}
        </span> */}
      </div>
    );
  }
  