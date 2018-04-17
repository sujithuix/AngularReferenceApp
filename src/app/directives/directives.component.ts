import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  movieTitle: string = "List of movies";

  movies: Movie[] = [
    { "title": "Zootopia", "director": "Byron Howard," },
    { "title": "Batman", "director": "Zack " },
    { "title": "Captain", "director": "Anthony" },
    { "title": "X-Men", "director": "Bryan" },
    { "title": "Warcraft", "director": "Duncan " },

  ]

}

class Movie {
  title: string;
  director: string;
}
