import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelpreferenceComponent } from './travelpreference.component';

describe('TravelpreferenceComponent', () => {
  let component: TravelpreferenceComponent;
  let fixture: ComponentFixture<TravelpreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelpreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelpreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
