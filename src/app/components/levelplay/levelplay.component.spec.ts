import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelplayComponent } from './levelplay.component';

describe('LevelplayComponent', () => {
  let component: LevelplayComponent;
  let fixture: ComponentFixture<LevelplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
