import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuManExcelComponent } from './stu-man-excel.component';

describe('StuManExcelComponent', () => {
  let component: StuManExcelComponent;
  let fixture: ComponentFixture<StuManExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuManExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuManExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
