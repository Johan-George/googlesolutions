import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgSelectDialogComponent } from './prog-select-dialog.component';

describe('ProgSelectDialogComponent', () => {
  let component: ProgSelectDialogComponent;
  let fixture: ComponentFixture<ProgSelectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgSelectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
