import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const definedPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{red.800}',
      100: '{red.800}',
      200: '{red.800}',
      300: '{red.800}',
      400: '{red.800}',
      500: '{red.800}',
      600: '{red.800}',
      700: '{red.800}',
      800: '{red.800}',
      900: '{red.900}',
      950: '{red.950}'
    }
  }
})

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
     providePrimeNG({
            theme: {
                preset: definedPreset,
                options: {
                  darkModeSelector: '.app-dark'
                }
            }
        })
  ]
};
