import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit{
  imageRootPath: string = "assets/images/"
  carDetailLoaded: boolean = false;
  carDetails: CarDetail[] = [];
  images: string[] = [];
  currentImage: string;
  currentIndex: number = 0;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
