import { Component } from '@angular/core';
import {FocusArea} from "./focus-area.model";
import {FocusAreaComponent} from "./focus-area/focus-area.component";
import {NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-focus-areas',
  standalone: true,
  imports: [
    FocusAreaComponent,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './focus-areas.component.html',
  styleUrl: './focus-areas.component.css'
})
export class FocusAreasComponent {
  focusAreasList: FocusArea[] = [
    new FocusArea('focus-areas.education.title', 'focus-areas.education.description', '/assets/images/education.jpg', 'focus-areas/education'),
    new FocusArea('focus-areas.environment.title', 'focus-areas.environment.description', '/assets/images/environment.jpg', 'focus-areas/environment'),
    new FocusArea('focus-areas.children.title', 'focus-areas.children.description', '/assets/images/children.jpg', 'focus-areas/children'),
    new FocusArea('focus-areas.locals.title', 'focus-areas.locals.description', '/assets/images/locals.jpg', 'focus-areas/locals'),
    new FocusArea('focus-areas.outside-of-japan.title', 'focus-areas.outside-of-japan.description', '/assets/images/outside-of-japan.jpg', 'focus-areas/outside-of-japan'),
    new FocusArea('focus-areas.animals.title', 'focus-areas.animals.description', '/assets/images/animals.jpg', 'focus-areas/animals'),
  ]
}
