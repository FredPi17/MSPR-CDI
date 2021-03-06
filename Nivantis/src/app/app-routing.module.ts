import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InformationPharmacieComponent} from "./information-pharmacie/information-pharmacie.component";
import {PageCalculComponent} from "./page-calcul/page-calcul.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'informationPharmacies', component: InformationPharmacieComponent},
  { path: 'pageCalcul', component: PageCalculComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
