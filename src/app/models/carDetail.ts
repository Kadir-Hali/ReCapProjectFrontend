import { Car } from "./car";
import { CarImage } from "./carImages";

export interface CarDetail extends Car {
    carImage: CarImage[];
    description: string;
  }