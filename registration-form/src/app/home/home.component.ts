import { Component,inject, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router  } from '@angular/router';
import { RegService } from '../Services/reg.service';
import { Reg } from '../Model/reg';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  route: Router = inject(Router);
  regService: RegService = inject(RegService);
  registrationForm: FormGroup;
  showingRegForm: boolean = true;
  showConfirm:boolean = true;

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
        new FormControl('', Validators.required),
        
      ]),
      experience: new FormArray([
      ])
    })

   
  }


  OnFormSubmitted(){
    const data: Reg = this.registrationForm.value as Reg;
    this.regService.OnsendForm(data);
    this.showingRegForm = false;
    this.showConfirm = true;
   this.route.navigate(['/confirmation'])
    this.registrationForm.reset()
  }

  OnAddSkills(){
    ( <FormArray>this.registrationForm.get('skills')).push( new FormControl('', Validators.required))
   }
   OnDeleteSkills(index: number){
     const controls = <FormArray>this.registrationForm.get('skills');
     controls.removeAt(index);
   }
 
   OnAddExp(){
     const formgrp = new FormGroup({
       company: new FormControl(null),
       position: new FormControl(null),
       exp: new FormControl(null),
       start: new FormControl(null),
       end: new FormControl(null),
     });
     (<FormArray>this.registrationForm.get('experience')).push(formgrp);
   }
   OnDeleteExp(index: number){
     const reMovEx = (<FormArray>this.registrationForm.get('experience'));
 
     reMovEx.removeAt(index);
   }
}
