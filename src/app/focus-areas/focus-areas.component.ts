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
    new FocusArea('Education', 'lorem', '/assets/images/test.jpg', 'focus-areas/education'),
    new FocusArea('Environment', 'lorem', '/assets/images/test.jpg', 'focus-areas/environment'),
    new FocusArea('Children', 'lorem', '/assets/images/test.jpg', 'focus-areas/children'),
    new FocusArea('Locals', 'lorem', '/assets/images/test.jpg', 'focus-areas/locals'),
    new FocusArea('Outside of Japan', 'lorem', '/assets/images/test.jpg', 'focus-areas/outside-of-japan'),
    new FocusArea('Animals', 'lorem', '/assets/images/test.jpg', 'focus-areas/animals'),
  ]
}
