import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldTypes } from 'src/app/shared/enums/field-type';

import { CustomInputComponent } from './custom-input.component';

describe('CustomInputComponent', () => {
  let component: CustomInputComponent;
  let fixture: ComponentFixture<CustomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return keys from enum', () => {
    let keys = Object.keys(FieldTypes);
    const result = component.keysInputType();
    expect(result).toEqual(keys);
  });
});
