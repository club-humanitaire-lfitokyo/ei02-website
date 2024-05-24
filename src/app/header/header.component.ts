import {Component, OnDestroy} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {filter, Subscription} from "rxjs";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnDestroy{
  private routeSubscription: Subscription;
  currentRoute: string = '';
  constructor(private router: Router) {
    this.routeSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url;
      });
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
