import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { KidsComponent } from './components/kids/kids.component';
import { LoginComponent } from './components/login/login.component';
import { MensComponent } from './components/mens/mens.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { WomensComponent } from './components/womens/womens.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'womens', component:WomensComponent},
  {path:'electronics', component:ElectronicsComponent},
  {path:'mens', component:MensComponent},
  {path:'kids', component:KidsComponent},
  {path:'mobile', component:MobileComponent},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
