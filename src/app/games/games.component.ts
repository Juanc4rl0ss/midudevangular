import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <p>
      <h3>Los juegos favoritos de {{user}}</h3>
      <ul>
        @for (game of games; track game.id) {
          <li>{{game.name}}</li>
        }
      </ul>

  `,
  styles: ``
})
export class GamesComponent {
  @Input() user: string = '';
  games = [
    {
      id: 1,
      name: 'Uncharted 4',
    },
    {
      id: 2,
      name: 'Horizon Zero Dawn',
    },
    {
      id: 3,
      name: 'Bloodborne',
    }
  ]
}
