import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepagesComponent } from './profilepages.component';

describe('ProfilepagesComponent', () => {
  let component: ProfilepagesComponent;
  let fixture: ComponentFixture<ProfilepagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilepagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilepagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
