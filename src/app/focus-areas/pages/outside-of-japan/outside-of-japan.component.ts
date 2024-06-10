import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-outside-of-japan',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule
  ],
  templateUrl: './outside-of-japan.component.html',
  styleUrl: './outside-of-japan.component.css'
})
export class OutsideOfJapanComponent {

}
