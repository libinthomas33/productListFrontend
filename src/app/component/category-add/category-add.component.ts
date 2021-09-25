import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  profileForm = new FormGroup({
    categoryName: new FormControl('')
  }); 
  constructor(
    private http: HttpClient
  ) { }
 
  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    // this.http.post('http://localhost:8080/api/create-user', formData).subscribe(
    // (response) => console.log(response),
    // (error) => console.log(error)
  // )
  }

}
