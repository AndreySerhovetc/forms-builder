import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EMPTY, of } from 'rxjs';
import { ElementService } from '../shared/services/element-service/element.service';
import { ShareService } from '../shared/services/shared-service/share.service';
import { ElementsListComponent } from './elements-list.component';
import { Elements } from '../shared/mock-elements';

describe('ElementsListComponent', () => {
  let component: ElementsListComponent;
  let elementService: ElementService;
  let shareService: ShareService;
  let fixture: ComponentFixture<ElementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsListComponent);
    component = fixture.componentInstance;
    elementService = new ElementService();
    shareService = new ShareService();
    component = new ElementsListComponent(elementService, shareService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getElements when ngOnInit', () => {
    const spy = spyOn(elementService, 'getElements').and.callFake(() => {
      return EMPTY;
    });

    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should update elements length after ngOnInit', () => {
    let listElements = Elements;

    spyOn(elementService, 'getElements').and.returnValue(of(listElements));
    component.ngOnInit();
    expect(component.elements.length).toBe(listElements.length);
  });
});
