import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductServiceService } from '../ProductService.service';

@Component({
  selector: 'app-FetchAll',
  templateUrl: './FetchAll.component.html',
  styleUrls: ['./FetchAll.component.css']
})
export class FetchAllComponent implements OnInit {
  @ViewChild('noProducts') noProducts!: TemplateRef<any>;
  
  productDetails: any = {};

  constructor(private productService:ProductServiceService) { }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts():void {
    this.productService.getProductAll().subscribe(
      response => {
        console.log("Product Details Retrieved Successfully", response);
        this.productDetails = response; 
        
      },
      error => {
        console.log("Failed to Retrieve Product Details", error);
      }
    );
  }
  ProductSearch(event: any) {
    const searchText = event.target.value.toLowerCase();   
    this.productService.filterbyProduct(searchText).subscribe(        
      response => {
        // console.log("product fetched Successfully",response);
        this.productDetails=response;
      },
      error => {
        this.getAllProducts();
      }
    );
  }
  CategorySearch(event: any) {
    const searchText = event.target.value.toLowerCase();   
    this.productService.filterbyCategory(searchText).subscribe(        
      response => {
        console.log("product fetched Successfully",response);
        this.productDetails=response;
      },
      error => {
        this.getAllProducts();
      }
    );
  }
  
      


}
