import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytravelersComponent } from './mytravelers.component';

describe('MytravelersComponent', () => {
  let component: MytravelersComponent;
  let fixture: ComponentFixture<MytravelersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytravelersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytravelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
