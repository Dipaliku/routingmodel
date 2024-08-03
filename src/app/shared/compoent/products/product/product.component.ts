import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 productid ! :string;
 prodobj ! : Iproduct;
  constructor(
    private _routes : ActivatedRoute,
    private _productsService : ProductsService
  ) { }

  ngOnInit(): void {
    console.log (this._routes.snapshot.params);
    console.log (this._routes.snapshot.params['productid']);

    this.productid = this._routes.snapshot.params['productid'];

    if(this.productid){
      this.prodobj = this._productsService.getproductdetails(this.productid)
      
    }
  }
}

