import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import usersList from '../../assets/data/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userCredentials:{ id:number,name:string,email: string; password: string,img:string }[]=usersList
public reactiveForm!:FormGroup;
public userEmail!:string;
public userPassword!:string

 public ngOnInit(): void {

    console.log(this.userCredentials);
    this.reactiveForm = new FormGroup({
      userEmail: new FormControl(null, Validators.required),
      userPassword: new FormControl(null, Validators.required),
    });

  }
  constructor( private routing:Router){}

  onSubmit(){
    console.log("heko");

    this.routing.navigate(['/dashboard']);

  }

}
