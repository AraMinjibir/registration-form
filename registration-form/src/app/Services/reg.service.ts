import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reg } from '../Model/reg';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private http: HttpClient) { }

  OnsendForm(data: Reg){
    this.http.post('https://registration-form-155d6-default-rtdb.firebaseio.com/reg-form.json'
    , data).subscribe();
  }
}
