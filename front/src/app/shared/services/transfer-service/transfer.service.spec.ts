import { fakeAsync, TestBed } from '@angular/core/testing';
import { Element } from '../../interfaces/element';
import { TransferService } from './transfer.service';

describe('TransferService', () => {
  let service: TransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return selected element', () => {
    service.selectedElement$.subscribe(value => {
      expect(value).toBeTruthy();
    });
  });

  it('should return deleteId element', () => {
    service.deleteId$.subscribe(value => {
      expect(value).toBeFalse();
    });
  });

  it('should add new selected element', () => {
    let el: Element = {
      id: 4,
      name: 'Checkbox',
      style: {
        width: '20px',
        height: '20px',
        color: '#000',
      },
    };

    service.changeSelectElement(el);
    service.selectedElement$.subscribe(value => {
      expect(value).toEqual(el);
    });
  });

  it('should add new deleteId element', fakeAsync(() => {
    let id = 10;

    service.deleteElementId(id);
    service.deleteId$.subscribe(value => {
      expect(value).toEqual(id);
    });
  }));
});
