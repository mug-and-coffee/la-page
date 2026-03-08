import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';

bootstrapApplication(App, {
  providers: [
    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: '.my-dark-mode', // optional
        },
      },
    }),
  ],
});
