import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImages';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = "https://localhost:44319/api/carImages/";

  constructor(private httpClient: HttpClient) { }

  getImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "getbycarid?id=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
