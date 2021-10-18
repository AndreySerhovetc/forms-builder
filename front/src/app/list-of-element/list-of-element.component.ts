
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from '../share-service.service';
import { Element } from '../Element';
import { ElementService } from '../element.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-list-of-element',
  templateUrl: './list-of-element.component.html',
  styleUrls: ['./list-of-element.component.scss']
})


export class ListOfElementComponent implements OnInit {
  public elements: Element[] = [];
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private elementService: ElementService,
    private share: ShareServiceService
    ) { }

  ngOnInit(): void {
    this.elementService.getElements().pipe(takeUntil(this.unsubscribeAll))
    .subscribe(res => this.elements = res)
  }

  onDrop(event: CdkDragDrop<Element[]>) {
    this.share.drop(event);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
