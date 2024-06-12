import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSoundPlayerComponent } from './mobile-sound-player.component';

describe('MobileSoundPlayerComponent', () => {
  let component: MobileSoundPlayerComponent;
  let fixture: ComponentFixture<MobileSoundPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileSoundPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileSoundPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
