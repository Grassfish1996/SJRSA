import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuUpdateComponent } from './stu-update.component';

describe('StuUpdateComponent', () => {
  let component: StuUpdateComponent;
  let fixture: ComponentFixture<StuUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
