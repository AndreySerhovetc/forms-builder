import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferService } from '../shared/services/transfer-service/transfer.service';

import { InfoElementComponent } from './info-element.component';

describe('InfoElementComponent', () => {
  let component: InfoElementComponent;
  let transferService: TransferService;
  let fixture: ComponentFixture<InfoElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoElementComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoElementComponent);
    component = fixture.componentInstance;
    component = new InfoElementComponent(transferService);
    transferService = new TransferService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
