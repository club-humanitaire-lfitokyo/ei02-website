import { Component } from '@angular/core';
import {CarouselComponent} from "./carousel/carousel.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        CarouselComponent,
        RouterLink
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
