import {Component, Input} from '@angular/core';
import {FocusArea} from "../focus-area.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-focus-area',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './focus-area.component.html',
  styleUrl: './focus-area.component.css'
})
export class FocusAreaComponent {
  @Input() focusArea: FocusArea = new FocusArea('error', 'no', 'no', 'no');
}
