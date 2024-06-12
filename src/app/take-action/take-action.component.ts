import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-take-action',
  standalone: true,
  imports: [
    CommonModule, // Import CommonModule for common Angular directives
    TranslateModule
  ],
  templateUrl: './take-action.component.html',
  styleUrls: ['./take-action.component.css'] // Corrected to styleUrls from styleUrl
})
export class TakeActionComponent implements AfterViewInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit() {
    // Use setTimeout to ensure the DOM is fully rendered before trying to scroll
    setTimeout(() => {
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }, 0); // Immediate execution after current call stack is clear
  }
}
