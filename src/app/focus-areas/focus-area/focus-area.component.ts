import {Component, Input} from '@angular/core';
import {FocusArea} from "../focus-area.model";

@Component({
  selector: 'app-focus-area',
  standalone: true,
  imports: [],
  templateUrl: './focus-area.component.html',
  styleUrl: './focus-area.component.css'
})
export class FocusAreaComponent {
  @Input() focusArea: FocusArea = new FocusArea('error', 'no', 'no', 'no');
}
