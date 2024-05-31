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
    new FocusArea('Education', 'Educational opportunities for underprivileged students through tutoring, school supply donations, and scholarships', '/assets/images/test.jpg', 'focus-areas/education'),
    new FocusArea('Environment', 'Work together to create a healthier, more sustainable world for future generations', '/assets/images/test.jpg', 'focus-areas/environment'),
    new FocusArea('Children', 'Help children living in unstable environments who lack access to education, healthcare, and nutritious food', '/assets/images/test.jpg', 'focus-areas/children'),
    new FocusArea('Locals', 'Help those who need it the most in our communities', '/assets/images/test.jpg', 'focus-areas/locals'),
    new FocusArea('Outside of Japan', 'Collaborate with international organisations to support global causes such as disaster relief, poverty alleviation, and educational support in developing countries', '/assets/images/test.jpg', 'focus-areas/outside-of-japan'),
    new FocusArea('Animals', 'Protecting and helping animals facing threats like habitat destruction, pollution, and exploitation due to human activities.', '/assets/images/test.jpg', 'focus-areas/animals'),
  ]
}
