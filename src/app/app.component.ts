import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  loading: boolean = true;
  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit() {
  
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
        this.loading = true;
    }
    if (event instanceof NavigationEnd) {
        this.loading = false;
    }
    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
        this.loading = false;
    }
    if (event instanceof NavigationError) {
        this.loading = false;
    }
  }
}
