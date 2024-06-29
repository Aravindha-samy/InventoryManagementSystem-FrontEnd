export interface Product {
    productId: number;
    productName: string;
    productDescribtion: string; 
    productQuantity: number;
    productCost: number;
    productBarCode: string;
    productCategory: string; 
    supplierId: number; 
    sales: Sales[]; 
    supplier: Supplier;
  }
  export interface Sales{
   
      salesId: number;
      quantitySold: number;
      salesDate: Date; 
      productId: number;
      customerId: number;
      transactionId: number;     
      product: Product;
     
  }
  export interface Supplier {    
    supplierId: number;
    supplierUserName: string;
    supplierFirstName: string;
    supplierLastName: string; 
    contactNumber: string;
    supplierEmailId: string;   
  }
  export interface User {
    userId: number;
    username: string;
    email: string;
    passwordHash: string;
    firstName: string;
    lastName: string;
    registrationDate: Date; 
}
