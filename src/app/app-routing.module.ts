import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ScorsingComponent } from './scorsing/scorsing.component';
import { StandingComponent } from './standing/standing.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'scorsing',component:ScorsingComponent},
  {path:'standing',component:StandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
