import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../model/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 productData ! : Array<Iproduct>
  constructor(
    private _productsservice : ProductsService
  ) { }

  ngOnInit(): void {
     this .productData = this._productsservice.fetchAllproducts()
  }

}
