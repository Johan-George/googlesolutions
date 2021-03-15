import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelselectComponent } from './levelselect.component';

describe('LevelselectComponent', () => {
  let component: LevelselectComponent;
  let fixture: ComponentFixture<LevelselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
