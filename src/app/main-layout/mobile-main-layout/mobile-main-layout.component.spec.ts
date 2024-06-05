import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMainLayoutComponent } from './mobile-main-layout.component';

describe('MobileMainLayoutComponent', () => {
  let component: MobileMainLayoutComponent;
  let fixture: ComponentFixture<MobileMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileMainLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
