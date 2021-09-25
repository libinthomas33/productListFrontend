import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  private apiUrl = environment.api_url 
  isparentDisp :any = '0';
  profileForm = new FormGroup({
    categoryName: new FormControl(''),
    isparent: new FormControl(''),
    selectParentid: new FormControl('')
  }); 
  parents: any;
  constructor(
    private http: HttpClient
  ) { }
 
  ngOnInit(): void {
  }
  onSubmit() {
    this.http.post(`${this.apiUrl}/category/save`, this.profileForm.value).subscribe(
      (response: any) => {
        this.profileForm.reset();
        this.isparentDisp = '0';
        this.profileForm.setValue({ categoryName: '',
        isparent: '',
        selectParentid: ''})
        alert(response.message);
      },
      (error) => alert(error)
    )
  }
  changeParent(event: any){
    if(event.target.value == '1: 0'){
      this.isparentDisp = '0'
    }else{
      this.http.post(`${this.apiUrl}/category/list`, {isparent: 0}).subscribe(
        (response: any) => {this.parents= response.data},
        (error) => console.log(error)
      )
      this.isparentDisp = '1'
    }
  }
  selectParent(event: any){
    this.profileForm.patchValue({selectParentid: event.target.value})
  }

}
