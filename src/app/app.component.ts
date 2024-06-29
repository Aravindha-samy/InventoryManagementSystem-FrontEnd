import { Component } from '@angular/core';
import { ProductServiceService } from './ProductService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'InventoryManagementSystem';

  constructor(private productService:ProductServiceService,private route: ActivatedRoute,private router: Router,private toast:NgToastService) { }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      const username= params['username'];
      if (username) {
        this.productService.loginUser(username);
      }
    });
  }
  
  logout() {
    const confrimation=confirm("Do you want to Logout");
    if (confrimation){
    localStorage.removeItem('token')
    this.productService.logoutUser(); 
    this.toast.info({detail:"Info",summary:"Logout Succesfully",duration:5000})
    this.router.navigate(['/login']);
    }
  }

  get isLoggedIn(): boolean {
    return this.productService.isLoggedIn();
  }

  get loggedInUsername(): string | null {
    return this.productService.getLoggedInUsername();
  }

 
}
