import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopMainLayoutComponent } from './desktop-main-layout.component';

describe('DesktopMainLayoutComponent', () => {
  let component: DesktopMainLayoutComponent;
  let fixture: ComponentFixture<DesktopMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopMainLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesktopMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
