import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListImmeubleHotel } from './list-immeuble-hotel/list-immeuble-hotel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  ListImmeubleHotel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Marv Tech');
}
