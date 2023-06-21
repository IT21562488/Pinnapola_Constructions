import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-new-card',
  templateUrl: './add-new-card.component.html',
  styleUrls: ['./add-new-card.component.css']
})
export class AddNewCardComponent implements OnInit {
  form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cardholderName: ['', [Validators.required, Validators.minLength(3)]],
      creditCardNumber: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      expirationDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }
  



  ngOnInit(): void {  
  }

}
