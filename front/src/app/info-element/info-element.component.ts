import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addSelectElementSelector } from 'src/reducers/selectedElement';


@Component({
  selector: 'app-info-element',
  templateUrl: './info-element.component.html',
  styleUrls: ['./info-element.component.scss']
})

export class InfoElementComponent implements OnInit {
  getElement$!: Observable<any>;
  items = ['Info', 'Change element'];
  expandedIndex = 0;
  
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getElement$ = this.store.select(addSelectElementSelector);
  }

}
