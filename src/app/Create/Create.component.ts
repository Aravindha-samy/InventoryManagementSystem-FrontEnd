import { ProductServiceService } from './../ProductService.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-Create',
  templateUrl: './Create.component.html',
  styleUrls: ['./Create.component.css']
})
export class CreateComponent implements OnInit {
  
  successMessage: string = '';
  errorMessage: string = '';
  productDetails: any[] = [];  
  barcodeNotUnique: boolean = false;

 

  constructor(private productService:ProductServiceService) {  }

  ngOnInit() {  
    this.getAllProducts();       
  }


  getAllProducts(): void {
    this.productService.getProductAll().subscribe(
      response => {
        // console.log("Product Details Retrieved Successfully", response);
        // console.log(response);
        this.productDetails = response; 
      }
    );
  } 
  checkBarcodeUniqueness(form:NgForm) {
    const barcode = form.value.productBarCode
    let p=0
    if (barcode) {
      for(let i of this.productDetails){
        if(i["productBarCode"]===barcode){
          this.barcodeNotUnique=false;
          p=1
        }
      }
      if(p==0){
        this.barcodeNotUnique=true;
      }
    }
  }

  

  
  onSubmit(form:NgForm){
   
    if(form.valid){
      const formdata=form.value;
      this.productService.addProduct(formdata).subscribe(
        response=>{
          console.log("Product Added Suucessfully",response);
          this.successMessage = 'Product created successfully.';
          this.errorMessage = '';
          form.resetForm();
        },
      error=>{
          console.log("Product Failed to Add",error);
          this.successMessage = '';
          if (error.status === 400) {
            this.errorMessage = 'Validation failed. Please check your input.';
          } else {
            this.errorMessage = 'Failed to create product. Please try again later.';
          }       
         }
      );    }
     
  }

  
  
}
