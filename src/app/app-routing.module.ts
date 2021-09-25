import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './component/category-add/category-add.component';
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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
