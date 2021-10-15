import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorsingComponent } from './scorsing.component';

describe('ScorsingComponent', () => {
  let component: ScorsingComponent;
  let fixture: ComponentFixture<ScorsingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorsingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
