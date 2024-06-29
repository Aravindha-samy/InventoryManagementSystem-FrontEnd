import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../ProductService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
  
})
export class IndexComponent implements OnInit {
  totalProducts: number=0;
  lowStock: number=0;
  supplierCount: number=0;
  customer:number=0;
  monthprofit:number=0;
  yearprofit:number=0;
  username: string = '';

  constructor(private productService:ProductServiceService,private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      
    });
    this.productService.getTotalProducts().subscribe(
      data => {
      this.totalProducts = data;
    },
    error => {
      console.log("Error Occured",error)
    });
    this.productService.getCustomer().subscribe(
      data => {
      this.customer = data;
    },
    error => {
      console.log("Error Occured",error)
    });
    this.productService.getMonthProfit().subscribe(
      data => {
      this.monthprofit = data;
    },
    error => {
      console.log("Error Occured",error)
    });
    this.productService.getYearProfit().subscribe(
      data => {
      this.yearprofit = data;
    },
    error => {
      console.log("Error Occured",error)
    });

    this.productService.getLowStock().subscribe(
      data => {
      this.lowStock = data;
    },
    error => {
      console.log("Error Occured",error)
    });

    this.productService.getSupplierCount().subscribe(
      response => {
      this.supplierCount = response;
    },
    error => {
      console.log("Error Occured",error)
    });
  }

}
