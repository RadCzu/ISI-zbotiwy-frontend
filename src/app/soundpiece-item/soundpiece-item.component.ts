import { Component, Input } from '@angular/core';
import { Soundpiece } from './soundpiece.model';

@Component({
  selector: 'app-soundpiece-item',
  templateUrl: './soundpiece-item.component.html',
  styleUrl: './soundpiece-item.component.sass'
})
export class SoundpieceItemComponent {

  @Input()sound!: Soundpiece;

  playSound(soundLink: string): void {
    const audio = new Audio(soundLink);
    console.log(soundLink)
    audio.oncanplay = () => {
      audio.play();
    };
  }

}
