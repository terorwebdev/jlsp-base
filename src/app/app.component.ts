import { Component, OnInit } from '@angular/core';
import { SeoService } from './services/seo.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jlsp';
  images = [
    { path: 'assets/images/feedback-1.jpeg' },
    { path: 'assets/images/feedback-2.jpeg' },
    { path: 'assets/images/feedback-3.jpeg' },
    { path: 'assets/images/feedback-3.1.jpeg' },
    { path: 'assets/images/feedback-4.jpeg' },
    { path: 'assets/images/feedback-5.jpeg' },
    { path: 'assets/images/feedback-6.jpeg' },
    { path: 'assets/images/feedback-7.jpeg' }
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private seoService: SeoService) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
    ).subscribe(data => {
      let seoData = data['seo'];
      this.seoService.updateTitle(seoData['title']);
      this.seoService.updateMetaTags(seoData['metaTags']);
    });
  }
}
