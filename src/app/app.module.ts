import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { FormsModule } from '@angular/forms';
import { RainbowComponent } from './rainbow/rainbow.component';
import { Rainbow2Directive } from './rainbow2.directive';
import { CvTechComponent } from './cv-tech/cv-tech.component';
import { CvComponent } from './cvTech1/cv/cv.component';
import { ListCvComponent } from './cvTech1/list-cv/list-cv.component';
import { ItemCvComponent } from './cvTech1/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech1/detail-cv/detail-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniWordComponent,
    RainbowComponent,
    Rainbow2Directive,
    CvTechComponent,
    CvComponent,
    ListCvComponent,
    ItemCvComponent,
    DetailCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
