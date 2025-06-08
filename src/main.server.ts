// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideRouter } from '@angular/router';
// import { routes } from './app/app.routes';
// import { renderApplication } from '@angular/platform-server';
// import { AppRoot } from './app/app';
// import 'zone.js/node';


// export default async function app()  {
//   return renderApplication(
//     () => bootstrapApplication(AppRoot, { providers: [provideRouter(routes)] }),
//     {
//       platformProviders: [] // Puedes agregar providers aquí si quieres, o dejarlo vacío
//     }
//   );
// }
import { renderApplication } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppRoot } from './app/app';
import 'zone.js/node';

export default async function app() {
  return renderApplication(
    () => bootstrapApplication(AppRoot, { providers: [provideRouter(routes)] }),
    {
      document: '<app-root></app-root>',
    }
  );
}
