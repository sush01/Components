import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementsModule } from './elements/elements.module';
import { ElementsHomeComponent } from "./elements/elements-home/elements-home.component";
import { ViewsHomeComponent } from './views/views-home/views-home.component';
import { ViewsModule } from './views/views.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ElementsModule, ElementsHomeComponent,ViewsHomeComponent, ViewsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Comps';
}
