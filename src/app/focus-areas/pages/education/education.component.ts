import { Component } from '@angular/core';
import {CarouselComponent} from "../../../home/carousel/carousel.component";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CarouselComponent,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
