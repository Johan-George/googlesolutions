import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCodeComponent } from './block-code.component';

describe('BlockCodeComponent', () => {
  let component: BlockCodeComponent;
  let fixture: ComponentFixture<BlockCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
