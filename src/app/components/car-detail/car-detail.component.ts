import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

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

  constructor(private carDetailService: CarService, private activatedRoute: ActivatedRoute, private carImageService: CarImageService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["carId"]) {
        this.getCarDetailsById(params["carId"])
        this.getImage(params["carId"])
      }
    })
  }

  getCarDetailsById(id: number) {
    this.carDetailService.getCarDetailsById(id).subscribe(result => {
      this.carDetails = result.data,
        this.carDetailLoaded = true
    })
  }

  getImage(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe(value => {
      value.data.map(value1 => this.images = value1.imagePath.split(",")),
        this.images = value.data.map(value1 => value1.imagePath.split(",")).flat();
      this.currentImage = this.images[0];
    })
  }

  nextImage() {
    if (this.currentIndex + 1 <= this.images.length - 1)
      this.currentIndex += 1;
    else
      this.currentIndex = 0;
    this.currentImage = this.images[this.currentIndex]
  }

  prevImage() {
    if (this.currentIndex - 1 >= 0)
      this.currentIndex -= 1;
    else if (this.currentIndex - 1 < 0)
      this.currentIndex = this.images.length - 1;
    this.currentImage = this.images[this.currentIndex]
  }

  loadImage() {
    return this.imageRootPath + this.currentImage;
  }
}
