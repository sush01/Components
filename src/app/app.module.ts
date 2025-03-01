import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ElementsModule } from './elements/elements.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ElementsModule,

  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }