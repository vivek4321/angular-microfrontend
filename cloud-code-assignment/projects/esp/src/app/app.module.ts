import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { EspDashboardComponent } from './pages/esp-dashboard/esp-dashboard.component';
import {CoreUiModule} from '../../../core-ui/src/projects';
const providers = [];
@NgModule({
  declarations: [
    AppComponent,
    EspDashboardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CoreUiModule,
    BrowserModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { 

}


@NgModule({})
export class espSharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}