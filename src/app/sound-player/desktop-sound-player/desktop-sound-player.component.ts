import { Component, ElementRef, Input, ViewChild, input } from '@angular/core';
import { Soundpiece } from '../../soundpiece-item/soundpiece.model';
import { SoundpiecesService } from '../../soundpiece-list/soundpieces.service';

@Component({
  selector: 'app-desktop-sound-player',
  templateUrl: './desktop-sound-player.component.html',
  styleUrl: './desktop-sound-player.component.sass'
})
export class DesktopSoundPlayerComponent {
  @ViewChild('audioPlayer', { static: true }) audioPlayer!: ElementRef<HTMLAudioElement>;

  showVolumeControl: boolean = false;
  isPlaying = false;
  progress = 0;
  volume = 1;
  currentSoundpiece: Soundpiece | null = null;
  updateRate: number = 16;

  constructor(private soundPiecesService: SoundpiecesService) {}


  ngOnInit() {
    this.soundPiecesService.currentSoundpiece$.subscribe(soundpiece => {
      this.currentSoundpiece = soundpiece;
      if (soundpiece) {
        this.loadSound(soundpiece);
      } else {
        this.audioPlayer.nativeElement.pause();
      }
    });
    setInterval(() => {
      this.updateProgress();
    }, this.updateRate);
  }
  
  loadSound(soundpiece: Soundpiece) {
    const audio = this.audioPlayer.nativeElement;
    audio.src = soundpiece.link;
    audio.load();
    this.togglePlayPause(true);
  }

  toggleVolumeControl() {
    this.showVolumeControl = !this.showVolumeControl;
  }

  togglePlayPause(forcePlay: boolean = false) {
    const audio = this.audioPlayer.nativeElement;
    if (this.isPlaying && !forcePlay) {
      audio.pause();
    } else {
      audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  updateProgress() {
    const audio = this.audioPlayer.nativeElement;
    if(isNaN(audio.duration)) {
      this.progress = 0;
      return
    }
    this.progress = (audio.currentTime / audio.duration) * 100;
    if(this.progress == 100) {
      this.progress = 0
      this.isPlaying = false
    }
  }

  setProgress(value: number) {
    this.progress = value
  }

  seekTo(event: Event) {
    const audio = this.audioPlayer.nativeElement;
    const seekValue = (event.target as HTMLInputElement).value;
    audio.currentTime = (audio.duration / 100) * Number(seekValue);
  }

  setVolume(event: Event) {
    const volumeValue = (event.target as HTMLInputElement).value;
    this.audioPlayer.nativeElement.volume = Number(volumeValue);
  }

  // settings
  // Toggle between themes
  toggleTheme(theme: string) {
    document.body.className = ''; 
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }

}
