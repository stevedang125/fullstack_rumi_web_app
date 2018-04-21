import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillcodeComponent } from './billcode.component';

describe('BillcodeComponent', () => {
  let component: BillcodeComponent;
  let fixture: ComponentFixture<BillcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
