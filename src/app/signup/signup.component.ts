import { Component } from '@angular/core';
import { ProductServiceService } from '../ProductService.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  successMessage: string = '';
  errorMessage: string = '';
  userdetails:any={};
  confirmPassword: string = '';
  userNotUnique: boolean=false;
  emailNotUnique: boolean=false;
  password: string='';
  showPassword: boolean = false;

  togglePasswordVisibility(): void {
      this.showPassword = !this.showPassword;
  }

  constructor(private productService:ProductServiceService,private router: Router,private toast:NgToastService) { }
  ngOnInit(){
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.productService.getUserAll().subscribe(
      response => {
        console.log("Product Details Retrieved Successfully", response);
        console.log(response);
        this.userdetails = response; 
      }
    );
  }
  checkUsernameUniqueness(form:NgForm) {
    const user = form.value.username
    let p=0
    if (user) {
      for(let i of this.userdetails){
        if(i["username"]===user){
          this.userNotUnique=false;
          p=1
        }
      }
      if(p==0){
        this.userNotUnique=true;
      }
    }
  }
  checkEmailUniqueness(form:NgForm) {
    const mail = form.value.email
    let p=0
    if (mail) {
      for(let i of this.userdetails){
        if(i["email"]===mail){
          this.emailNotUnique=false;
          p=1
        }
      }
      if(p==0){
        this.emailNotUnique=true;
      }
    }
  }

  onSubmit(form:NgForm){
    if(form.valid){
      const formdata=form.value;
      this.productService.addUser(formdata).subscribe(
        response=>{
          console.log("Product Added Suucessfully",response);          
          this.successMessage = 'User created successfully.';
          this.errorMessage = '';
          this.toast.success({detail:"success",summary:"Signup Successfull",duration:5000})
          // this.router.navigate(['/login']);

          form.resetForm();
        },
      error=>{
          console.log("Product Failed to Add",error);
          this.successMessage = '';
          if (error.status === 400) {
            this.errorMessage = 'Validation failed. Please check your input.';
          } else {
            this.toast.error({detail:"error",summary:"Signup Failed",duration:5000})

            this.errorMessage = 'Failed to create User. Please try again later.';
          }       
         }
      );    }
     
  }

}
