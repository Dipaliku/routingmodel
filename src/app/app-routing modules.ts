import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/compoent/home/home.component";
import { UsersComponent } from "./shared/compoent/users/users.component";
import { ProductsComponent } from "./shared/compoent/products/products.component";
import { NoPageFoundComponent } from "./shared/compoent/no-page-found/no-page-found.component";
import { UserComponent } from "./shared/compoent/user/user.component";
import { UserFormComponent } from "./shared/compoent/user-form/user-form.component";
import { ProductFormComponent } from "./shared/compoent/products/product-form/product-form.component";
import { ProductComponent } from "./shared/compoent/products/product/product.component";

// baseurl http://localhost:4200
const routes : Routes =[
    {
        path :'',//http://localhost:4200
        component : HomeComponent
    },
    {
        path :'home',//http://localhost:4200/home
        component:HomeComponent
    },
    {
        path:'users',//http://localhost:4200/users
        component:UsersComponent
    },
    {
        path:'users/:usersId',//http://localhost:4200/users/123
        component:UserComponent //,//http://localhost:4200/users/adduser
    },
    {
        path:'users/:usersId/edituser',//http://localhost:4200/users/123/editusers
        component:UserFormComponent
    },
    
    {
        path:'users/adduser',//http://localhost:4200/users
        component:UserFormComponent
    },
    {
        path:'products',//http://localhost:4200/products
        component:ProductsComponent
    },
    {
        path:'products/addproduct',//http://localhost:4200/products/addproduct
        component:ProductFormComponent
    },
    {
        path:'products/:productid',//http://localhost:4200/products/addproduct
        component:ProductComponent
    },
    {
        path:'products/:productid/editproduct',//http://localhost:4200/products/addproduct
        component:ProductFormComponent
    },
    // {
    //     path :'page-not-found',
    //     component :NoPageFoundComponent
    // },
    // {
    //     path : '***',//wildcard routing
    //     redirectTo : 'page-not-found'
    // }

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}

// add 