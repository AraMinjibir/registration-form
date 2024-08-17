import { Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'confirmation', component: ConfirmationComponent},
    {path: "app-home", component: HomeComponent}
];
