import { Component, OnInit } from '@angular/core';
import { FormBuilder, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      // FirstName: '',
      // LastName: '',
      name: '',
      email: '',
      address: '',
      telephone: ''
    });

    // onSubmit(customerData) {
    //   // Process checkout data here
    //   // console.warn('Your order has been submitted', customerData);

    //   this.checkoutForm.reset();

    // }
  }

}
