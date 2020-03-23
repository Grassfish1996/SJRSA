import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuManComponent } from './stu-man.component';

describe('StuManComponent', () => {
  let component: StuManComponent;
  let fixture: ComponentFixture<StuManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
