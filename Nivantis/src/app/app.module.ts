import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {InformationPharmacieComponent} from './information-pharmacie/information-pharmacie.component';
import {NavComponent} from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageCalculComponent} from './page-calcul/page-calcul.component';
import {AdminFormulaireComponent} from './admin-formulaire/admin-formulaire.component';
import {LoginComponent} from "./login/login.component";


// @ts-ignore
@NgModule({
    declarations: [
        AppComponent,
        InformationPharmacieComponent,
        NavComponent,
        PageCalculComponent,
        AdminFormulaireComponent,
        LoginComponent
    ],
    entryComponents: [],
    imports: [
        HttpClientModule,
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        StatusBar,
        SplashScreen
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
