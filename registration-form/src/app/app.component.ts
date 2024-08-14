import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'registration-form';

  registrationForm: FormGroup;

  ngOnInit(){
    this.registrationForm = new FormGroup ({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      gender: new FormControl(''),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        country:new  FormControl('', Validators.required),
        city: new  FormControl(''),
        postal: new  FormControl('',Validators.required),
        region: new  FormControl(''),
      }),

      skills: new FormArray([
        new FormControl(null, Validators.required),
        new FormControl(null, Validators.required),
        new FormControl(null, Validators.required),
      ])
    })

   
  }

  OnFormSubmitted(){
    console.log(this.registrationForm.value);
    this.registrationForm.reset()
  }
}
