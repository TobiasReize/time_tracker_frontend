import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);


  postData(endpoint: string, payload = {}): Observable<any> {
    return this.http.post<any>(endpoint, payload);
  }


  getData(endpoint: string): Observable<any> {
    return this.http.get<any>(endpoint);
  }

}
