import React, { useState } from 'react';
import { CheckboxInput, CheckboxLabel } from '../../styles/Checkbox'

const healthConditionList = [
    'None',
    'Liver Disease',
    'Current cancer treatment',
    'Shortness of breath or difficulty breathing',
    'Fatigue',
    'Muscle or body aches',
    'Headache',
    'New loss of taste or smell',
    'Sore throat',
    'Congestion or runny nose',
    'Nausea or vomiting',
    'Diarrhea'
  ];

  // const healthConditionCheckboxes = [
  //   { key: '0', name: 'None', label: "none"},
  //   { key: '1', name: 'Liver Disease', label: 'liver_disease'},
  //   { key: '2', name: 'Current cancer treatment', label: 'current_cancer_treatment'},
  //   { key: '3', name: 'Deficiencies of the immune system or HIV', label: 'immune_system_HIV'},
  //   { key: '4', name: 'Diabetes', label: 'diabetes'},
  //   { key: '5', name: 'Kidney Disease requiring dialysis', label: 'kidney_disease'},
  //   { key: '6', name: 'Moderate to severe Asthma', label: 'asthma'},
  //   { key: '7', name: 'Obesity', label: 'obesity'},
  //   { key: '8', name: 'Organ or bone marrow transplant', label: 'transplant'},
  //   { key: '9', name: 'Serious heart conditions', label: 'heart_conditions'},
  //   { key: '10', name: 'Sickle cell, thalassemia, or other hemoglobin disease', label: 'hemoglobin_disease'},
  //   { key: '11', name: 'Taking medications that weaken the immune system (such as steroids)', label: 'medications'},
  // ]

  const getDefaultCheckboxes = () =>
    healthConditionList.map(checkbox => ({
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

  export default function HealthConditionCheckbox() {
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
  