import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductServiceService } from '../ProductService.service';

@Component({
  selector: 'app-FetchAllUsingFilter',
  templateUrl: './FetchAllUsingFilter.component.html',
  styleUrls: ['./FetchAllUsingFilter.component.css']
})
export class FetchAllUsingFilterComponent implements OnInit {

  @ViewChild('noProducts') noProducts!: TemplateRef<any>;
 
  productDetails: any = {}; 

  constructor(private productService:ProductServiceService) { }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts():void {
    this.productService.getProductAllFilter().subscribe(
      response => {
        console.log("Product Details Retrieved Successfully", response);
        this.productDetails = response; 
        
      },
      error => {
        console.log("Failed to Retrieve Product Details", error);
      }
    );
  }

}
