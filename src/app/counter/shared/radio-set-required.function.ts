import {ControlGroup, RadioButtonState} from '@angular/common';

export function radioSetRequired(controlGroup: ControlGroup) {
  for(let name of Object.keys(controlGroup.controls)) {
    let radio = controlGroup.controls[name].value as RadioButtonState;
    if(radio.checked) {
      return null;
    }
  }
  return {
    atLeastOneRadioRequired: true
  };
}