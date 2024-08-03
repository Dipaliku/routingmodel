import { Injectable } from '@angular/core';
import { Iproduct } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArr : Array<Iproduct> =[
    {
      pname : "samsung M13",
      pid : "123",
      pstatus : "in-progress",
      canreturn : 1
    },
    {
      pname : "apple iphone14",
      pid : "125",
      pstatus : "dispatched",
      canreturn : 1
    }, 
    {
      pname : "one plus 14",
      pid : "126",
      pstatus : "delivered",
      canreturn : 0
    },
  ]

  constructor() { }

  fetchAllproducts(){
      return this .productsArr
  }

  getproductdetails(id:string) : Iproduct{
    return this.productsArr.find(prod => prod.pid===id) as Iproduct
  }
}
