import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEditorGuideComponent } from './code-editor-guide.component';

describe('CodeEditorGuideComponent', () => {
  let component: CodeEditorGuideComponent;
  let fixture: ComponentFixture<CodeEditorGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeEditorGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeEditorGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
