import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:44319/api/brands/';
  
  constructor(private httpClient: HttpClient) { }
  
  getBrands() : Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + "getall" 
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
    }

    getBrandsById(id: number): Observable<ListResponseModel<Brand>>{
      let newPath = this.apiUrl + "getbyid?id=" + id
      return this.httpClient.get<ListResponseModel<Brand>>(newPath)
    }
  }

  
