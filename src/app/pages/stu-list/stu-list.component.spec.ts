import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuListComponent } from './stu-list.component';

describe('StuListComponent', () => {
  let component: StuListComponent;
  let fixture: ComponentFixture<StuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
