import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundpieceItemComponent } from './soundpiece-item.component';

describe('SoundpieceItemComponent', () => {
  let component: SoundpieceItemComponent;
  let fixture: ComponentFixture<SoundpieceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoundpieceItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoundpieceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
