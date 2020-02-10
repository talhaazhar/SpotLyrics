import { Component, OnInit, Input } from '@angular/core';
import { Genre } from '../../../providers/Genre';

@Component({
  selector: 'genre-tab',
  templateUrl: './genre-tab.component.html',
  styleUrls: ['./genre-tab.component.scss'],
})
export class GenreTabComponent implements OnInit {
  @Input() genre: Genre;

  constructor() { }

  ngOnInit() {}

}
