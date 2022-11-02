import { Component } from '@angular/core';

@Component({
  selector: 'footballers-app',
  template: `
    <h2>Welcome Players</h2>
    <img src="assets/images/thomas-muller.png"/>
  `
})
export class FootballersApp {
  title = 'Footballers App';
}
