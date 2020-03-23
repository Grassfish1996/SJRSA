import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreManComponent } from './score-man.component';

describe('ScoreManComponent', () => {
  let component: ScoreManComponent;
  let fixture: ComponentFixture<ScoreManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
