import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-card',
  template: `
    <h1 cds-text="heading" cds-layout="m-b:lg m-t:lg">Card</h1>

    <app-eslint-intro-block rule="no-clr-card"></app-eslint-intro-block>

    <demo [tabs]="demo1">
      <h3 cds-text="section" cds-layout="m-b:lg">Card with title and body</h3>
    </demo>
    <demo [tabs]="demo2">
      <h3 cds-text="section" cds-layout="m-b:lg">Card media block</h3>
    </demo>
  `,
})
export class CardPage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'card/card.1.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'card/card.1.core.txt',
      },

      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'card/card.2.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'card/card.2.core.txt',
      },

      template: 'core',
    },
  ];
}