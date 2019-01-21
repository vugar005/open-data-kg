import { NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export function HttpLoaderFactory(http: HttpClient) {
  const link = environment.production ? '../SHARED/' : './assets/i18n/';
  return new TranslateHttpLoader(http, link, '.json');
}
@NgModule({
 imports: [
  TranslateModule.forChild({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }),
 ],
 exports: [TranslateModule]
}
)
export class SharedTranslateModule {}

