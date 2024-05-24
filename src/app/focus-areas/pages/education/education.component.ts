import { Component } from '@angular/core';
import {CarouselComponent} from "../../../home/carousel/carousel.component";

@Component({
  selector: 'app-education',
  standalone: true,
    imports: [
        CarouselComponent
    ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
