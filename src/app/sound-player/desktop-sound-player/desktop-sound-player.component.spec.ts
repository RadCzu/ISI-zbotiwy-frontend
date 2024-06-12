import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSoundPlayerComponent } from './desktop-sound-player.component';

describe('DesktopSoundPlayerComponent', () => {
  let component: DesktopSoundPlayerComponent;
  let fixture: ComponentFixture<DesktopSoundPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopSoundPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesktopSoundPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
