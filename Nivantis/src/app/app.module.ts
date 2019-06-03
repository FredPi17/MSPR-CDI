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

@NgModule({
  declarations: [AppComponent, InformationPharmacieComponent, NavComponent, PageCalculComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
