import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; //tambahkan RouterModule

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SuratComponent } from './surat/surat.component';
import { BerkasComponent } from './berkas/berkas.component';
import { FrameworkComponent } from './framework/framework.component';
import { HttpClientModule } from '@angular/common/http' //mengambil API, tambahkan juga HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SuratComponent,
    BerkasComponent,
    FrameworkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        component: AppComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "surat",
        component: SuratComponent
      },
      {
        path: "berkas",
        component: BerkasComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
