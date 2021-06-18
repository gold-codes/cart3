import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }
  searchTerm: string;
  @Output() sendSearchValue=new EventEmitter(); 
  searchStorage = '';
  onSearchInput(event){

    this.searchStorage=event.target.value;
    this.sendSearchValue.emit(this.searchStorage);
  }

  ngOnInit() {
  }

}
