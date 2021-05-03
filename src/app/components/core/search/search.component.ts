import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() searched = new EventEmitter<string>();
  searchTerm = '';

  constructor() {}

  ngOnInit(): void {}

  search($event) {
    this.searched.emit($event);
  }
}
