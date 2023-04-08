import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.scss']
})
export class ApiCallComponent {
  private apiUrl = 'https://fakestoreapi.com/products';
  data: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.http.get<any>(this.apiUrl).subscribe((response: any) => {
      this.data = response;
      console.log(this.data);

    });
  }

}
