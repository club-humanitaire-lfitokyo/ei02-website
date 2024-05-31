import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-environment',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './environment.component.html',
  styleUrl: './environment.component.css'
})
export class EnvironmentComponent {

}
