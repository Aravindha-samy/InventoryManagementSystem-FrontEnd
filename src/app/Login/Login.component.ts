
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../ProductService.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';
  password: string='';
  showPassword: boolean = false;
  eye:string="bi-eye-slash";

  togglePasswordVisibility(): void {
      this.showPassword = !this.showPassword;
      this.showPassword?this.eye="bi-eye":this.eye="bi-eye-slash"
  }

  ngOnInit() {  }
  constructor(private productService:ProductServiceService,private router: Router,private toast:NgToastService) { }

  
  login(form: NgForm){
    const Username: string = form.value.Username; 
    const passwordHash: string = form.value.passwordHash; 

    this.productService.Loginauthentication(Username,passwordHash).subscribe(        
      response => {
        if(response===null){
          this.toast.error({detail:'Error',summary:"Login Failed  ",duration:3000})
          this.errorMessage = 'Invalid username or password. Please check your credentials.';        }
        else{

          this.toast.success({detail:'Success',summary:"Login Suuccessfull  "+ Username,duration:5000, position:'topCenter'})
        
          localStorage.setItem('token',Math.random().toString());

          this.router.navigate(['/index'], { queryParams: { username: Username} });

        }       
      },
      error => {
        this.errorMessage = 'Contact Admin or Try again later.';

        this.toast.error({detail:'Success',summary:"Login Failed",duration:3000})
      }
    );
}

  


  

}
function showSuccessTopCenter() {
  throw new Error('Function not implemented.');
}

