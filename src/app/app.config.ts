import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MOVIE_SERVICE } from '../interface/movie-service';
import { MovieMockService } from './services/mock/movie-mock-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: MOVIE_SERVICE,
      useClass: MovieMockService,
    },
  ]
};
