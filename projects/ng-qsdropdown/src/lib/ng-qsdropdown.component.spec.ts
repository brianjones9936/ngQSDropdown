import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgQSDropdownComponent } from './ng-qsdropdown.component';

describe('NgQSDropdownComponent', () => {
  let component: NgQSDropdownComponent;
  let fixture: ComponentFixture<NgQSDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgQSDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgQSDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
