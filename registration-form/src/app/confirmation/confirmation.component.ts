import { Component, Output, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  route: Router = inject(Router);
  showConfirm:boolean = false;


  redirectToForm(){
    this.route.navigate(['app-home'])
  }
}
