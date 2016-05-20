import {Component} from '@angular/core';
import {ControlGroup, FormBuilder} from '@angular/common';
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
    this.orderSheetForm = this._formBuilder.group({});
  }
}
