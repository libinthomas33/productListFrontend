import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './component/category-add/category-add.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductlistComponent } from './component/productlist/productlist.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductlistComponent
  },
  {
    path: 'category-add',
    component: CategoryAddComponent
  },
  {
    path: 'product-add',
    component: ProductAddComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
