import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MymodalComponent } from './mymodal/mymodal.component';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzInputModule } from 'ng-zorro-antd/input';
import { BlankViewComponent } from './blank-view/blank-view.component';
import { ExistingViewComponent } from './existing-view/existing-view.component';
import { NzIconModule } from 'ng-zorro-antd/icon';


registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    MymodalComponent,
    BlankViewComponent,
    ExistingViewComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,

    NzModalModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,

  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
