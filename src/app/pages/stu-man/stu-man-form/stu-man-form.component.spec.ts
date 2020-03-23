import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuManFormComponent } from './stu-man-form.component';

describe('StuManFormComponent', () => {
  let component: StuManFormComponent;
  let fixture: ComponentFixture<StuManFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuManFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuManFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
