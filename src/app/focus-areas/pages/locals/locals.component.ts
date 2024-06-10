import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-locals',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule
  ],
  templateUrl: './locals.component.html',
  styleUrl: './locals.component.css'
})
export class LocalsComponent {

}
