import { Component } from '@angular/core';
import { GamesComponent } from "../games/games.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  favGame =  '';

  getFavoriteGame(game: string) {
    this.favGame = game;
  }
greet() {
  alert("Hola1!!")
}
  user = 'midudev';
  isLoggedIn = false;
}
