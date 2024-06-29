import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../ProductService.service';
import * as XLSX from 'xlsx';

 

@Component({
  selector: 'app-SalesReport',
  templateUrl: './SalesReport.component.html',
  styleUrls: ['./SalesReport.component.css']
})
export class SalesReportComponent implements OnInit {

  productDetails: any = {}; 

  
  
  constructor(private productService:ProductServiceService) { }
  ngOnInit() {
    this.report();

  }
  report():void{
    
    this.productService.report().subscribe(        
      response => {
        console.log(response);
        this.productDetails=response;
      },
      error => {
        console.log("product failed to fetch",error);
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
        this.report();
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
        this.report();
      }
    );
  }

  downloadExcel(): void {
    const fileName = 'sales_report.xlsx';
  
    // Prepare data for Excel file
    const data = this.productDetails.map((item: any)=> ({
      'Product Id': item.productId,
      'Product Name': item.productName,
      'Product Category': item.productCategory,
      'Product Quantity': item.productQuantity,
      'Customer Id':item.sales?.$values[0]?.customerId,
      'Sales Id': item.sales?.$values[0]?.salesId,
      'Quantity Sold': item.sales?.$values[0]?.quantitySold ,
      'Sales Month': item.sales?.$values[0]?.salesDate,
      'Sales Amount (₹)': item.sales?.$values[0]?.profit
    }));
  
    // Convert data to Excel file format
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sales Report');
  
    // Generate Excel file
    XLSX.writeFile(workbook, fileName);
  }
  
  
}
