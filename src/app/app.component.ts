import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TachesComponent } from './taches/taches.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TachesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GestionDesTaches';
}
