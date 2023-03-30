import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit{
  brands: Brand[] = [];
  apiUrl = 'https://localhost:44319/api/brands/getall';
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.httpClient.get<BrandResponseModel>(this.apiUrl).subscribe((response) => {
      this.brands = response.data;
    });
  }
}
