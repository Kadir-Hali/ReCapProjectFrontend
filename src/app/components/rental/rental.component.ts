import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalResponseModel } from 'src/app/models/rentalResponseModel';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit{
  rentals: Rental[] = [];
  apiUrl = 'https://localhost:44319/api/rentals/getrentaldetails';
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.getRentals();
  }

  getRentals() {
    this.httpClient.get<RentalResponseModel>(this.apiUrl).subscribe((response) => {
      this.rentals = response.data;
    });
  }
}
