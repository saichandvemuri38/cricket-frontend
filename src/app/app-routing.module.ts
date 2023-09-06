import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { HomeComponent } from './core/screens/home/home.component';
import { AdobePdfComponent } from './core/screens/adobe-pdf/adobe-pdf.component';
import { AddPlayerComponent } from './core/screens/add-player/add-player.component';
import { ScoreBoardComponent } from './core/screens/score-board/score-board.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'adobe',component:AdobePdfComponent},
  {path:'add-player',component:AddPlayerComponent},
  {path:'score-board',component:ScoreBoardComponent},
  {path:'adobe',component:AdobePdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings = [LoginComponent,HomeComponent,AdobePdfComponent,AddPlayerComponent,ScoreBoardComponent]
