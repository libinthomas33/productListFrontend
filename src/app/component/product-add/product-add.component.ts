import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  private apiUrl = environment.api_url 
  profileForm = new FormGroup({
    productName: new FormControl(''),
    category_id: new FormControl('')
  }); 
  parents: any;
  subcategory: any = [];
  constructor(
    private http: HttpClient
  ) { }
 
  ngOnInit(): void {
    this.getSubCategoryList();
  }
  getSubCategoryList(){
    this.http.post(`${this.apiUrl}/category/list`, {isparent: 1}).subscribe(
      (response: any) => {
        this.subcategory = response.data;
      },
      (error) => console.log(error)
    )
  }
  onSubmit() {
    let params = {
      productName: this.profileForm.value.productName,
      category_id: this.profileForm.value.category_id,
      parent_category_id: this.profileForm.value.category_id.parent_id
    }
    let index = this.subcategory.findIndex((x: any) => x._id == this.profileForm.value.category_id);
    if(index != -1){
      params.parent_category_id = this.subcategory[index]['parent_id']
    }
    
    
    this.http.post(`${this.apiUrl}/product/save`, this.profileForm.value).subscribe(
      (response: any) => {
        this.profileForm.reset();
        alert(response.message);
      },
      (error) => alert(error)
    )
  }
  
  selectCategory(event: any){
  }


}


