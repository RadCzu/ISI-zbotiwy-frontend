import { Component, Input } from '@angular/core';
import { Soundpiece } from './soundpiece.model';
import { SoundpiecesService } from '../soundpiece-list/soundpieces.service';

@Component({
  selector: 'app-soundpiece-item',
  templateUrl: './soundpiece-item.component.html',
  styleUrl: './soundpiece-item.component.sass'
})
export class SoundpieceItemComponent {

  @Input()sound!: Soundpiece;

  constructor(private soundpieceService: SoundpiecesService) {}

  playSound(soundLink: string): void {
    // const audio = new Audio(soundLink);
    // console.log(soundLink)
    // audio.oncanplay = () => {
    //   audio.play();
    // };
    this.soundpieceService.setCurrentSoundpiece(this.sound);
  }

}
