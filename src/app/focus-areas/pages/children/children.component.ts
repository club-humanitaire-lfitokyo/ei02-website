import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {

}
