import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-locals',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './locals.component.html',
  styleUrl: './locals.component.css'
})
export class LocalsComponent {

}
