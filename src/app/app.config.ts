import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const definedPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{red.900}',
      100: '{red.900}',
      200: '{red.900}',
      300: '{red.900}',
      400: '{red.900}',
      500: '{red.900}',
      600: '{red.900}',
      700: '{red.900}',
      800: '{red.900}',
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
