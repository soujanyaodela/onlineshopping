import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public signupForm !:FormGroup;

  constructor(private formBuilder:FormBuilder, 
    private http :HttpClient,
    private router:Router
    ) { }
  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
    .subscribe(res=>{
      alert("Signup Successfull");
      this.signupForm.reset();
    },err=>{
      alert("Something went wrong")
    })
    

  }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      mobile:['']
    })
    
  }


}
