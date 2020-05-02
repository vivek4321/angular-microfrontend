import { NgModule } from '@angular/core';
import { CoreUiComponent } from './core-ui.component';
import { TreeViewComponent } from './widgets/tree-view/tree-view.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [CoreUiComponent, TreeViewComponent],
  imports: [
    MatButtonModule
  ],
  exports: [CoreUiComponent, TreeViewComponent]
})
export class CoreUiModule { }
