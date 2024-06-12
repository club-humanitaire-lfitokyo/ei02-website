import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {ExtraOptions, provideRouter, withRouterConfig} from '@angular/router';

import { routes } from './app.routes';
import {HttpClient, HttpClientModule, provideHttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HtmlParser} from "@angular/compiler";
import {HttpLoaderFactory} from "./app.component";

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: "enabled",
  anchorScrolling: "enabled"
}
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withRouterConfig(routerOptions)),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }))

  ]
};
