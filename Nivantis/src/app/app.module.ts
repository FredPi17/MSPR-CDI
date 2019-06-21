import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InformationPharmacieComponent } from './information-pharmacie/information-pharmacie.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PageCalculComponent} from './page-calcul/page-calcul.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    InformationPharmacieComponent,
    NavComponent,
    PageCalculComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StatusBar,
    SplashScreen, Geolocation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
