import { Component } from '@angular/core';
import {CarouselComponent} from "../../../home/carousel/carousel.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-education',
  standalone: true,
    imports: [
        CarouselComponent,
        RouterLink
    ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
