import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHelloWorldComponent } from './mobile-hello-world.component';

describe('MobileHelloWorldComponent', () => {
  let component: MobileHelloWorldComponent;
  let fixture: ComponentFixture<MobileHelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileHelloWorldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
