import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { CoreUiModule } from './../../projects/core-ui/src/lib/core-ui.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: MainNavigationComponent},
  {path: 'esp', loadChildren : () => import('../../projects/esp/src/app/app.module').then(m => m.espSharedModule)},
  {path: 'app4', loadChildren : () => import('../../projects/app4/src/app/app.module').then(m => m.App4SharedModule)},
  // { path: '**', redirectTo: '/esp'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
