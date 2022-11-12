import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  projects = [
    {
      picture:"../assets/calc.png",
      name:"Tic Tac Toe game"
    },
    {
      picture:"../assets/map.jpg",
      name:"Map Data Across The Globe"
    },
    {
      picture:"../assets/random-quote-machine.png",
      name:"Random Quote Machine"
    },
    {
      picture:"../assets/tic-tac-toe.png",
      name:"Tic Tac Toe game"
    },
    {
      picture:"../assets/tribute.jpg",
      name:"Tribute Page"
    },
    {
      picture:"../assets/wiki.png",
      name:"Wikipedia viewer"
    }
  
  ]
}
