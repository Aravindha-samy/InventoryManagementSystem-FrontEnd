import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductServiceService } from '../ProductService.service';

@Component({
  selector: 'app-FetchAllUsingAssociation',
  templateUrl: './FetchAllUsingAssociation.component.html',
  styleUrls: ['./FetchAllUsingAssociation.component.css']
})
export class FetchAllUsingAssociationComponent implements OnInit {

  productDetails: any = {}; 
  productName: string='/';
  quantitySold:number=0;
 
 


  constructor(private productService:ProductServiceService) { }

  ngOnInit() {
  this.fetchProductAssociation();
  }  
  onSubmit(form:NgForm){
    this.productDetails=null;
    let productName: string = form.value.productName.trim(); 
    productName = productName === '' ? '/' : productName;    
    let quantity: number = parseInt(form.value.quantitySold);
    if (isNaN(quantity)) {
     quantity =1000; 
    }
    console.log(quantity,productName);
    if (typeof productName === 'string' && !isNaN(quantity)){
    this.productService.fetchProductAssociation(productName,quantity).subscribe(        
          response => {
            console.log("product fetched Successfully",response);
            this.productDetails=response;
          },
          error => {
            console.log("product failed to fetch",error);
          }
        );
    }
    else {
      console.log("Invalid input values",Error);
    }
  }
  fetchProductAssociation():void{
    
    this.productService.fetchProductAssociation(this.productName,this.quantitySold).subscribe(        
      response => {
        console.log("product fetched Successfully",response);
        this.productDetails=response;
      },
      error => {
        console.log("product failed to fetch",error);
      }
    );    
  }
  
}