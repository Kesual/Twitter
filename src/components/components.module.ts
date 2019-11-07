import { NgModule } from '@angular/core';
import { MessageTemplatesComponent } from './message-templates/message-templates';
import {IonicModule} from "ionic-angular";
import { MorningComponent } from './message-templates/morning/morning';
import { EveningComponent } from './message-templates/evening/evening';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
	declarations: [MessageTemplatesComponent,
    MorningComponent,
    EveningComponent],
  imports: [
    IonicModule,
    BrowserModule,
    HttpClientModule
  ],
	exports: [MessageTemplatesComponent,
    MorningComponent,
    EveningComponent]
})
export class ComponentsModule {}
