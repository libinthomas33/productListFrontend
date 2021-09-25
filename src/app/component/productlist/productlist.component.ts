import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  private apiUrl = environment.api_url 
  cat_sub_arr: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.fetchAggregateData();
  }
  fetchAggregateData(){
    this.http.post(`${this.apiUrl}/category/cat-sub`, {isparent: 1}).subscribe(
      (response: any) => {
        this.cat_sub_arr = response.data;
      },
      (error) => console.log(error)
    )
  }
  getFormatedHtml(subCat: any){
    console.log(subCat)
    let html = '';
    subCat.map((e: any)=>{
      html+= `<dd>- ${e.categoryName}</dd>`
    })
    console.log(html)
    return html
  }
}
