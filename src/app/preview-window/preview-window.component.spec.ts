import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewWindowComponent } from './preview-window.component';

describe('PreviewWindowComponent', () => {
  let component: PreviewWindowComponent;
  let fixture: ComponentFixture<PreviewWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewWindowComponent]
    });
    fixture = TestBed.createComponent(PreviewWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
