import { Component, OnInit } from '@angular/core';
import { FormBuilder, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  checkoutForm;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      FirstName: '',
      LastName: '',
      email: '',
      address: '',
      telephone: ''
    });
  }
  onSubmit(customerData) {
    // Process checkout data here
    this.checkoutForm.reset();
  }
}
