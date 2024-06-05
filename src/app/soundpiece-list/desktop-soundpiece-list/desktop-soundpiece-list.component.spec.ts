import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSoundpieceListComponent } from './desktop-soundpiece-list.component';

describe('DesktopSoundpieceListComponent', () => {
  let component: DesktopSoundpieceListComponent;
  let fixture: ComponentFixture<DesktopSoundpieceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopSoundpieceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesktopSoundpieceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
