import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspDashboardComponent } from './pages/esp-dashboard/esp-dashboard.component';


const routes: Routes = [
  {path: 'esp/two', component: EspDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
