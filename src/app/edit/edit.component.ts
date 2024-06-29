import { Component } from '@angular/core';
import { ProductServiceService } from '../ProductService.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  productDetails: any = {}; 
  responseMessage:string='';
  barcodeNotUnique: boolean = false;
  productDetail: any={};
  constructor(private route: ActivatedRoute,private productService:ProductServiceService) { }
  
  ngOnInit() {
    this.getAllProducts(); 
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.productService.getProduct(id).subscribe(product => {
        this.productDetails = product;
      });
    });
  }
  getAllProducts(): void {
    this.productService.getProductAll().subscribe(
      response => {
        console.log("Product Details Retrieved Successfully", response);
        console.log(response);
        this.productDetail = response; 
      }
    );
  } 



  onSubmit(form: NgForm) {
    if (form.valid) {
      this.productDetails=null;
      const productId = form.value.id;
      this.productService.getProduct(productId).subscribe(
        response => {
          console.log("Product Details Retrieved Successfully", response);
          this.responseMessage = "Data fetched successfully";
          this.productDetails = response; 
          form.resetForm();
        },
        error => {
          if (error.status === 500) {
            this.responseMessage = "ID not found";
          }else {
            this.responseMessage = "An error occurred. Please try again later or contact admin.";
            console.error(error); // Log the error for debugging
          }      
          }
      );
    } 
  }
  checkBarcodeUniqueness(form:NgForm) {
    const barcode = form.value.productBarCode
    let p=0
    if (barcode) {
      for(let i of this.productDetail){
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

  onUpdate(form:NgForm){
    if(form.valid){
      const formdata=form.value;
      const productId = form.value.productId;
      this.productService.updateProduct(productId,formdata).subscribe(
        response=>{
          console.log("Product Updated Suucessfully",response);
          this.responseMessage = "Data Updated successfully";
          form.resetForm();
        },
      error=>{
          console.log("Product Failed to Update",error);
          this.responseMessage = "An error occurred. Please try again later or contact admin.";

        }
      );    }
      
  }
}
