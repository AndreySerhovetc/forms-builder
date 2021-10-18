import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addSelectElementSelector } from 'src/reducers/selectedElement';
// import { addSelectElementSelector } from 'src/reducers/selectedElement';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-info-element',
  templateUrl: './info-element.component.html',
  styleUrls: ['./info-element.component.scss']
})

export class InfoElementComponent implements OnInit {
  getElement$!: Observable<any>;
  currentElement: any = {}
  selectedId?: any
  objElement: any = {};
  arrayOfElement: any = this.transfer.listElements$
  items = ['Info', 'Change element'];
  expandedIndex = 0;


  constructor(
    private transfer: TransferService,
    // private store: Store
  ) { }

  ngOnInit(): void {
    this.transfer.selectedElement$.subscribe(
      res => this.currentElement = res
    )

    // this.arrayOfElement = this.transfer.listElements$
    // this.getElement$ = this.store.select(addSelectElementSelector);
    // this.getElement$.pipe(
    //   map((res: any) => console.log(res))
    // )

  };


  onSelect(key: any, event: Event): void {
    this.objElement = this.currentElement.style
    this.objElement[key] = (<HTMLInputElement>event.target).value;
  }

  // getElementFromArray() {
  //   this.transfer.loadElements = this.arrayOfElement
  // }
}

