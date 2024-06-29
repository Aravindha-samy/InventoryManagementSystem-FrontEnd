import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Product, Supplier, User } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  private username: string | null = null;

  loginUser(username: string) {
    this.username = username;
  }

  logoutUser() {
    this.username = null;
  }

  getLoggedInUsername(): string | null {
    return this.username;
  }

  isLoggedIn(): boolean {
    return !!this.username;
  }
  
  private createUrl='https://localhost:44354/Product/post';
  private getByIdUrl='https://localhost:44354/Product/Get'
  private updateProductUrl='https://localhost:44354/Product/put';
  private deleteProductUrl='https://localhost:44354/Product/Delete';
  private getAllUrl='https://localhost:44354/Product/GetAll';
  private getAllFilterUrl='https://localhost:44354/Product/GetProductsUsingFilter';
  private fetchAssociationUrl='https://localhost:44354/Product/GetProductUsingAssociation';
  private fetchAllJoin='https://localhost:44354/Product/GetProductWithSupplier';
  private baseUrl='https://localhost:44354/Product/';
  private getSupplierId='https://localhost:44354/Product/GetSuppliers';
  private getAllSupplierUrl='https://localhost:44354/Product/GetAllSuppliers';
  private login='https://localhost:44354/Product/Login';
  private createUserUrl='https://localhost:44354/Product/PostUser';
  private getAllUsersUrl='https://localhost:44354/Product/GetAllUsers';
  private salesReport="https://localhost:44354/Product/ProfitList"
  private filterProductUrl="https://localhost:44354/Product/FilterByProduct"
  private filterCategoryUrl="https://localhost:44354/Product/FilterByCategory"

  constructor(private http:HttpClient) { }
  getCustomer(): Observable<number> {
    return this.http.get<number>(this.baseUrl + 'Customer');
  }
  getMonthProfit(): Observable<number> {
    return this.http.get<number>(this.baseUrl + 'MonthProfit');
  }
  getYearProfit(): Observable<number> {
    return this.http.get<number>(this.baseUrl + 'YearProfit');
  }
  addProduct(productData:Product):Observable<Product>{
    return this.http.post<Product>(this.createUrl, productData)
  }
  getProduct(productId: number): Observable<any> {
    return this.http.get<Product>(`${this.getByIdUrl}/${productId}`);
  }

   updateProduct(productId: number, updatedProductData: Product): Observable<Product> {
    return this.http.put<Product>(`${this.updateProductUrl}/${productId}`,updatedProductData);    
   }
   deleteProduct(productId: number): Observable<Product> {
    return this.http.delete<Product>(`${this.deleteProductUrl}/${productId}`);
  }
  getProductAll():Observable<Product[]> {
    return this.http.get<Product[]>(this.getAllUrl);
  }
  getProductAllFilter():Observable<Product[]> {
    return this.http.get<Product[]>(this.getAllFilterUrl);
  }
  fetchProductAssociation(productName:string,productQuantity:number): Observable<any[]>{
    return this.http.get<any[]>(`${this.fetchAssociationUrl}/?productName=${productName}&quantity=${productQuantity}`);
  }
  fetchProductSales(productId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.getAllUrl}/products/${productId}`);
  }
  getProductsWithSuppliers(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.fetchAllJoin}`);
  }
  getTotalProducts(): Observable<number> {
    return this.http.get<number>(this.baseUrl + 'TotalProducts');
  }

  getLowStock(): Observable<number> {
    return this.http.get<number>(this.baseUrl + 'LowStock');
  }

  getSupplierCount(): Observable<number> {
    return this.http.get<number>(this.baseUrl + 'SupplierCount');
  }
 
  fetchSupplier(supplierId: number): Observable<any> {
    return this.http.get<Product>(`${this.getSupplierId}/${supplierId}`);
  }
  getSupplierAll():Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.getAllSupplierUrl);
  }
  Loginauthentication(Username:string,PasswordHash:string): Observable<any[]>{
    return this.http.get<any[]>(`${this.login}/?Username=${Username}&PasswordHash=${PasswordHash}`);
}
addUser(productData:Product):Observable<Product>{
  return this.http.post<Product>(this.createUserUrl, productData)
}
getUserAll():Observable<User[]> {
  return this.http.get<User[]>(this.getAllUsersUrl);
}
report():Observable<Product[]> {
  return this.http.get<Product[]>(this.salesReport);
}
filterbyProduct(productName:string): Observable<any[]>{
  return this.http.get<any[]>(`${this.filterProductUrl}/?productName=${productName}`);
}
filterbyCategory(productCategory:string): Observable<any[]>{
  return this.http.get<any[]>(`${this.filterCategoryUrl}/?productCategory=${productCategory}`);
}
}
