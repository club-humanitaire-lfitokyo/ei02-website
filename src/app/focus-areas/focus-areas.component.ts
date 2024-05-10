import { Component } from '@angular/core';
import {FocusArea} from "./focus-area.model";
import {FocusAreaComponent} from "./focus-area/focus-area.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-focus-areas',
  standalone: true,
  imports: [
    FocusAreaComponent,
    NgForOf
  ],
  templateUrl: './focus-areas.component.html',
  styleUrl: './focus-areas.component.css'
})
export class FocusAreasComponent {
  focusAreasList: FocusArea[] = [
    new FocusArea('Test', 'lorem', '/assets/images/test.jpg', ''),
    new FocusArea('Test', 'lorem', '/assets/images/test.jpg', ''),
    new FocusArea('Test', 'lorem', '/assets/images/test.jpg', ''),
    new FocusArea('Test', 'lorem', '/assets/images/test.jpg', ''),
    new FocusArea('Test', 'lorem', '/assets/images/test.jpg', ''),
    new FocusArea('Test', 'lorem', '/assets/images/test.jpg', ''),
    new FocusArea('Test', 'lorem', '/assets/images/test.jpg', ''),
    new FocusArea('Test', 'lorem', '/assets/images/test.jpg', ''),
    new FocusArea('Test', 'lorem', '/assets/images/test.jpg', ''),
    new FocusArea('Test', 'lorem', '/assets/images/test.jpg', ''),
    new FocusArea('Test', 'lorem', '/assets/images/test.jpg', '')
  ]
}
