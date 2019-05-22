import { ValueTranslateModule } from './pipes/value-translate/value-translate.module';
import { NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export function HttpLoaderFactory(http: HttpClient) {
  const link = environment.production ? '../SHARED/' : './assets/i18n/';
  return new TranslateHttpLoader(http, link, `.json?random=${Math.random() * 100}`);
}
@NgModule({
 imports: [
   ValueTranslateModule,
  TranslateModule.forChild({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }),
 ],
 exports: [ValueTranslateModule,TranslateModule]
}
)
export class SharedTranslateModule {}

