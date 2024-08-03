import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iproduct } from 'src/app/shared/model/products';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  proddform ! : FormGroup;
  isineditmode : boolean = false;
  productid ! : string; //undefinded
  private _productservice: any;
  _routes: any;

  constructor(
  ) { }

  ngOnInit(): void {
    this.createprodform();
    this .productid = this._routes.snapshot.params['prpductid']
    if(this.productid){
      this.isineditmode = true;
    }else{
      this.isineditmode =false;
    }
  }
    createprodform(){
    this.proddform =new FormGroup({
      pname : new FormControl(null,[Validators.required]),
      pstatus : new FormControl(null,[Validators.required]),
      canreturn : new FormControl(null,[Validators.required])
    })
  }
  onprodAdd(){
      if(this.proddform.valid){
      
      }
    }
}


