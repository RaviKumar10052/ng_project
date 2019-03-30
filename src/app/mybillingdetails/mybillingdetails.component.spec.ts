import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybillingdetailsComponent } from './mybillingdetails.component';

describe('MybillingdetailsComponent', () => {
  let component: MybillingdetailsComponent;
  let fixture: ComponentFixture<MybillingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybillingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybillingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
