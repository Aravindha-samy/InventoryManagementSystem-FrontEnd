import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../ProductService.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Delete',
  templateUrl: './Delete.component.html',
  styleUrls: ['./Delete.component.css']
})
export class DeleteComponent implements OnInit {

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
      this.productDetails=null;
      const productId = form.value.id;
      this.productService.getProduct(productId).subscribe(
        response => {
          console.log("Product Details Retrieved Successfully", response);
          this.responseMessage = "Product found. Are you sure you want to delete?";
          this.productDetails = response; 
          form.resetForm();
        },
        error => {
          console.log("Failed to Retrieve Product Details", error);
          this.responseMessage = "Product not found.";
        }
      );
    } 
  }
  onDelete(productId:number){
    
      this.productService.deleteProduct(productId).subscribe(
        response => {
          console.log("Product Deleted SuccessFully",response);
          this.responseMessage = "Product deleted successfully.";
          this.productDetails = null;
          
        },
        error => {
          console.log("Product Failed to Delete",error);
          this.responseMessage = "Failed to delete product. Please try again later.";
        }
      );
    }
  

}
