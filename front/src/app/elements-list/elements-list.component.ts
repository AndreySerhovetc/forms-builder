import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ShareService } from '../shared/services/shared-service/share.service';
import { Element } from '../shared/interfaces/element';
import { ElementService } from '../shared/services/element-service/element.service';

@Component({
  selector: 'app-elements-list',
  templateUrl: './elements-list.component.html',
  styleUrls: ['./elements-list.component.scss'],
})
export class ElementsListComponent implements OnInit, OnDestroy {
  public elements: Element[] = [];
  private destroyAll: Subject<any> = new Subject<any>();

  constructor(
    private elementService: ElementService,
    private share: ShareService,
  ) {}

  ngOnInit(): void {
    this.elementService
      .getElements()
      .pipe(takeUntil(this.destroyAll))
      .subscribe(res => (this.elements = res));
  }

  onDrop(event: CdkDragDrop<Element[]>): void {
    this.share.drop(event);
  }

  ngOnDestroy(): void {
    this.destroyAll.next();
    this.destroyAll.complete();
  }
}
