
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../ProductService.service';

@Component({
  selector: 'app-FethAllJoin',
  templateUrl: './FethAllJoin.component.html',
  styleUrls: ['./FethAllJoin.component.css']
})
export class FethAllJoinComponent implements OnInit {

  products: any = [];
  suppliers: any = [];
  joinedData: any=[];

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.productService.getProductAll().subscribe(products => {
    this.products = products;
    console.log(this.products);
    this.productService.getSupplierAll().subscribe(suppliers => {
    this.suppliers = suppliers;
    this.joinedData = this.performJoin(this.products, this.suppliers);
    console.log(this.joinedData)    
       });
      });
      }
      performJoin(products: any[], suppliers: any[]): any[] {
        return products.map(product => {
          const supplier = suppliers.find(supplier => supplier.supplierId === product.supplierId);
          return { ...product, supplier };
        });
      }

}
  // getProductsWithSuppliers(): void {
  //   this.productService.getProductsWithSuppliers().subscribe(
  //     response => {
  //       console.log("Product Fetched", response);
  //       this.products = response;
  //       this.processProducts(); // Call method to process products after fetching
  //     },
  //     error => {
  //       console.error('Failed to fetch products with suppliers:', error);
  //     }
  //   );
  // }

  // fetchSupplier(supplierId: number): void {
  //   this.productService.fetchSupplier(supplierId).subscribe(
  //     response => {
  //       console.log("Supplier fetched successfully", response);
  //       this.suppliers.push(response);
  //     },
  //     error => {
  //       console.log("Failed to fetch supplier", error);
  //     }
  //   );
  // }

  // processProducts(): void {
  //   this.products.forEach((product: { supplier: { $ref: any; }; }) => {
  //     if (product.supplier?.$ref) {
  //       const supplierId = product.supplier.$ref;
  //       const supplier = this.suppliers.find((s: { supplierId: any; }) => s.supplierId === supplierId);
  //       if (!supplier) {
  //         // If supplier information not already fetched, fetch it
  //         this.fetchSupplier(supplierId);
  //       }
  //     }
  //   });
  // }
