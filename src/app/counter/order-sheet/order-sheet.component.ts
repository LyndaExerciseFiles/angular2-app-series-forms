import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'order-sheet',
  templateUrl: 'app/counter/order-sheet/order-sheet.component.html',
  styleUrls: ['app/counter/order-sheet/order-sheet.component.css']
})
export class OrderSheetComponent {
  orderSheetForm: FormGroup;
  weirdRequestsControls: FormArray;
  formActive = true;
  showWelcomeMessage = false;
  
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  
  private buildForm() {
    this.orderSheetForm = this.formBuilder.group({
      customerName: this.formBuilder.control(null, 
        Validators.compose([Validators.required, Validators.minLength(2)])
      ),
      size: this.formBuilder.control(null, Validators.required),
      specialtySandwich: this.formBuilder.control(null),
      bread: this.formBuilder.control(null, Validators.required),
      meats: this.formBuilder.group({
        meatHam: this.formBuilder.control(null),
        meatTurkey: this.formBuilder.control(null),
        meatRoastBeef: this.formBuilder.control(null)
      }),
      cheeses: this.formBuilder.group({
        cheeseProvolone: this.formBuilder.control(null),
        cheeseCheddar: this.formBuilder.control(null),
        cheeseSwiss: this.formBuilder.control(null)
      }),
      veggiesAndSuch: this.formBuilder.group({
        veggieLettuce: this.formBuilder.control(null),
        veggieTomato: this.formBuilder.control(null),
        veggieMustard: this.formBuilder.control(null)
      }),
      weirdRequests: this.formBuilder.array([
        this.formBuilder.control(null)
      ]),
      otherNotes: this.formBuilder.control(null)
    });
    
    let customerNameControl = this.orderSheetForm.controls['customerName'] as FormControl;
    customerNameControl.valueChanges.subscribe(value => {
      this.showWelcomeMessage = value && value.toLowerCase().trim() === 'justin s.';
    });
    
    this.weirdRequestsControls = this.orderSheetForm.controls['weirdRequests'] as FormArray;
  }
  
  onAddWeirdRequest() {
    this.weirdRequestsControls.push(this.formBuilder.control(null));
  }
  
  onRemoveWeirdRequest(index) {
    this.weirdRequestsControls.removeAt(index);
  }
  
  onClearForm() {
    this.orderSheetForm.reset();
  }
  
  onSubmitForm() {
    console.log(this.orderSheetForm.value);
  }
}
