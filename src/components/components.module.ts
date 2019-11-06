import { NgModule } from '@angular/core';
import { MessageTemplatesComponent } from './message-templates/message-templates';
import {IonicModule} from "ionic-angular";
import { MorningComponent } from './message-templates/morning/morning';
import { EveningComponent } from './message-templates/evening/evening';

@NgModule({
	declarations: [MessageTemplatesComponent,
    MorningComponent,
    EveningComponent],
  imports: [
    IonicModule
  ],
	exports: [MessageTemplatesComponent,
    MorningComponent,
    EveningComponent]
})
export class ComponentsModule {}
