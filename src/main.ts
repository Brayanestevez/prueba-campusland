import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppRoot } from './app/app';
import { routes } from './app/app.routes';

bootstrapApplication(AppRoot, {
  providers: [
    provideRouter(routes) 
  ]
});
