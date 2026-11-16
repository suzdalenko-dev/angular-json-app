import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core'; 
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {   // La estructura de la configuración principal
  providers: [
    provideBrowserGlobalErrorListeners(),       // Registra mecanismos para escuchar errores globales del navegador
    provideRouter(routes),                      // Registra el sistema de rutas de Angular.
    provideHttpClient()                         // Http cliente
  ]
};
