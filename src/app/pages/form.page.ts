/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-form',
  template: `
    <h1 cds-text="heading" cds-layout="m-b:lg m-t:lg">Form</h1>
    <app-eslint-intro-block rule="no-clr-form"></app-eslint-intro-block>

    <demo [tabs]="demo1">
      <h3 cds-text="section" cds-layout="m-b:lg">Horizontal</h3>
    </demo>

    <demo [tabs]="demo2">
      <h3 cds-text="section" cds-layout="m-b:lg">Vertical</h3>
    </demo>

    <demo [tabs]="demo3">
      <h3 cds-text="section" cds-layout="m-b:lg">Compact</h3>
    </demo>

    <demo [tabs]="demo4">
      <h3 cds-text="section" cds-layout="m-b:lg">Display helpers, errors and success messages</h3>
      <p>
        Clarity Core don't handle display of messages as <code>error</code> or <code>success</code> the same way as
        Clarity Angular does. This is left up to the developer to control when a given message is visible or not and how
        to display it. But we provide some examples to show how to do this with Angular Forms. You could check
        <a href="/textarea">Textarea</a>, <a href="/datalist">Datalist</a> or some other of the Form components for more
        examples.
      </p>

      <p>
        Bellow is a simple form with two form controls (input and textarea) that show and hide control-messages based on
        the status of the form or the type of the error.
      </p>

      <p></p
    ></demo>
  `,
})
export class FormPage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'forms/forms.1.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'forms/forms.1.core.txt',
      },

      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'forms/forms.2.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'forms/forms.2.core.txt',
      },

      template: 'core',
    },
  ];

  demo3: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'forms/forms.3.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'forms/forms.3.core.txt',
      },

      template: 'core',
    },
  ];

  demo4: DemoTabData[] = [
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'forms/forms.4.core.txt',
      },

      template: 'core',
    },
  ];
}