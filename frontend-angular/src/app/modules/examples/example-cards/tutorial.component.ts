import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../../core/services/seo/seo.service';
import { Feature } from './feature';

@Component({
  selector: 'app-tutorial',
  imports: [CommonModule, RouterLink],
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: Feature[];

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: object) {

    this.features =
      [

        {
          type: 'T-SHIRTS',
          description: 'T-SHIRTS for men and Women',
          image: '4.png',
          link: 'crud'
        },
        {
          type: 'GIFTS',
          description: 'GIFTS',
          image: '2.png',
          link: 'crud'
        },
        {
          type: 'jewellery ',
          description: 'jewellery',
          image: '5.png',
          link: 'services'
        },
        {
          type: 'Foot Wear',
          description: 'Foot Wear',
          image: '11.png',
          link: 'components'
        },
        {
          type: 'Deals',
          description: 'Deals',
          image: '1.png',
          link: 'components'
        },
       
        {
          type: 'Coming Soon',
          description: 'Coming Soon',
          image: 'empty-logo.png',
          link: 'components'
        },

        {
          type: 'Coming Soon',
          description: 'Coming Soon',
          image: 'empty-logo.png',
          link: 'components'
        },
        {
          type: 'Coming Soon',
          description: 'Coming Soon',
          image: 'empty-logo.png',
          link: 'components'
        },
        
       
        
      ];

  }

  ngOnInit(): void {

    const content =
      'Cette application a été développée avec Angular version 18.0.0 et bootstrap 5.3.3' +
      ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)';

    const title = 'Chooseurlook-Home-1';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }

  loadScript(name: string): void {

    if (isPlatformBrowser(this.platformId)) {
      const src = document.createElement('script');
      src.type = 'text/javascript';
      src.src = name;
      src.async = false;
      document.getElementsByTagName('head')[0].appendChild(src);
    }
  }

}

