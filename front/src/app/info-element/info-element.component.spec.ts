import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoElementComponent } from './info-element.component';

describe('InfoElementComponent', () => {
  let component: InfoElementComponent;
  let fixture: ComponentFixture<InfoElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
