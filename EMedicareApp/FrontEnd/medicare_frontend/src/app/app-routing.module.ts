import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
    {path: "",
    component:AdmindashboardComponent},
    {
      path: "update",
      component:UpdateComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
