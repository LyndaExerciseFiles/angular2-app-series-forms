import {Component} from '@angular/core';
import {ControlGroup, Control, FormBuilder} from '@angular/common';
import {DebugPanelComponent} from '../debug-panel/debug-panel.component';

@Component({
  selector: 'order-sheet',
  directives: [DebugPanelComponent],
  templateUrl: 'order-sheet.component.html',
  styleUrls: ['order-sheet.component.css'],
  moduleId: module.id
})
export class OrderSheetComponent {
  orderSheetForm: ControlGroup;
  
  constructor(private _formBuilder: FormBuilder) {
    this._buildForm();
  }
  
  private _buildForm() {
    this.orderSheetForm = this._formBuilder.group({
      customerName: this._formBuilder.control(null),
      specialtySandwich: this._formBuilder.control(null),
      otherNotes: this._formBuilder.control(null),
      meats: this._formBuilder.group({
        meatHam: this._formBuilder.control(null),
        meatTurkey: this._formBuilder.control(null),
        meatRoastBeef: this._formBuilder.control(null)
      }),
      cheeses: this._formBuilder.group({
        cheeseProvolone: this._formBuilder.control(null),
        cheeseCheddar: this._formBuilder.control(null),
        cheeseSwiss: this._formBuilder.control(null)
      }),
      veggiesAndSuch: this._formBuilder.group({
        veggieLettuce: this._formBuilder.control(null),
        veggieTomato: this._formBuilder.control(null),
        veggieMustard: this._formBuilder.control(null)
      }),
    });
  }
}
