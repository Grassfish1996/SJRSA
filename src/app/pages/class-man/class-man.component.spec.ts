import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassManComponent } from './class-man.component';

describe('ClassManComponent', () => {
  let component: ClassManComponent;
  let fixture: ComponentFixture<ClassManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
