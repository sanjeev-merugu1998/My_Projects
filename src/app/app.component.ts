import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MATERIAL_MODULES } from './shared/material-imports';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MATERIAL_MODULES],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Weather_app';
}
