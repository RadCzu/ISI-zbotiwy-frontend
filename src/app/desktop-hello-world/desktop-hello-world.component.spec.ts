import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopHelloWorldComponent } from './desktop-hello-world.component';

describe('DesktopHelloWorldComponent', () => {
  let component: DesktopHelloWorldComponent;
  let fixture: ComponentFixture<DesktopHelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopHelloWorldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesktopHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
