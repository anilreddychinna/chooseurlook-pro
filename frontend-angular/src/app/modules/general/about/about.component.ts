/*
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
*/

import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { PLATFORM_ID } from '@angular/core';

import { Quote } from './quote';

import { SeoService } from '../../../core/services/seo/seo.service';
import { Feature } from './feature';
import { Dependency } from './dependency';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  dependencies: Dependency;
  features: Feature;
  quote: Quote;
  id: number;

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: object) {

    const content = 'About content with meta';
    this.seoService.setMetaDescription(content);

    this.id = 0;
    this.quote = new Quote();
    this.dependencies = {
      frontend: [
        { name: 'Angular 19.2.9' },
        { name: 'Angular CLI 19.2.10' },
        { name: 'Angular SSR 19.2.10' },
        { name: 'Bootstrap 5.3.5' },
        { name: 'Font Awesome 6.7.2' },
      ],
      backend: [
        { name: 'JAVA 21' },
       
      ]
    };

    this.features = {
      frontend: [
       
        {
          name: 'Components',
          englishTutorial: '',
          frenchTutorial: 'https://www.ganatan.com/tutorials/components-avec-angular',
        },
       
      ],
      backend: [
        { name: 'Local JSON' },
        { name: 'RESTFull API' },
        { name: 'CRUD API' },
        { name: 'Database Creation' },
        { name: 'Data Import' },
        { name: 'Data Export' },
      ]
    };

  }

  ngOnInit(): void {
    this.loadQuote();

    const content =
      'Cette application a été développée avec Angular version 16.1.7 et bootstrap 5.3.2' +
      ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)';

    const title = 'angular-starter Title : About Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }


  loadQuote() {
    const quotes = [
      {
        name: 'Lawrence of Arabia',
        title: 'There is nothing in the desert and no man needs nothing',
        link: 'https://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)'
      },
      {
        name: 'Alien Prometheus',
        title: 'Big things have small beginnings',
        link: 'https://en.wikipedia.org/wiki/Prometheus_(2012_film)'
      },
      {
        name: 'Blade Runner',
        title: 'All those moments will be lost in time... like tears in rain... Time to die.',
        link: 'https://en.wikipedia.org/wiki/Blade_Runner'
      },
    ];
    const index = quotes.length;
    let id = this.id;
    while (this.id === id) {
      id = Math.floor(Math.random() * index);
    }
    this.id = id;
    this.quote = quotes[id];
  }



}
