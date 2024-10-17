import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DummyComponent,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-form-app';
}
