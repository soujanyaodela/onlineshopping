import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm!:FormGroup
     submitted=false;

     constructor(private formBuilder: FormBuilder){ }

     ngOnInit(){
      //validations

      this.registerForm=this.formBuilder.group({
        firstName:['',Validators.required]
      })
     }
     onSubmit(){
      this.submitted=true
      if(this.registerForm.invalid){
        return
      }
      alert("Successfully register")
     }

}
