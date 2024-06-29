
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductServiceService } from '../ProductService.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-Details',
  templateUrl: './Details.component.html',
  styleUrls: ['./Details.component.css']
})
export class DetailsComponent {
  responseMessage: string = '';
  productDetails: any = {}; 

  constructor(private route: ActivatedRoute,private productService:ProductServiceService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.productService.getProduct(id).subscribe(product => {
        this.productDetails = product;
      });
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.productDetails = null;
      const productId = form.value.id;
      this.productService.getProduct(productId).subscribe(
        response => {
          if (response) {
            console.log("Product Details Retrieved Successfully", response);
            this.productDetails = response;            
            this.responseMessage = "Data fetched successfully";
          } else {
            this.responseMessage = "ID not found";
          } 
          form.resetForm();
        },
        error => {
          console.log("Failed to Retrieve Product Details", error);
          if (error.status = 404) {
            this.responseMessage = "ID not found";
          } else if (error.status = 400) {
            this.responseMessage = "Enter valid ID";
          } else {
            this.responseMessage = "Please contact admin";
          }
        }
      );
    } 
  }
}
