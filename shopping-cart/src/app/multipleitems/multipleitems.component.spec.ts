import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleitemsComponent } from './multipleitems.component';

describe('MultipleitemsComponent', () => {
  let component: MultipleitemsComponent;
  let fixture: ComponentFixture<MultipleitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
