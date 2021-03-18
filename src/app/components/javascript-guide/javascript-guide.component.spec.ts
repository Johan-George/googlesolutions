import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptGuideComponent } from './javascript-guide.component';

describe('JavascriptGuidComponent', () => {
  let component: JavascriptGuideComponent;
  let fixture: ComponentFixture<JavascriptGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
