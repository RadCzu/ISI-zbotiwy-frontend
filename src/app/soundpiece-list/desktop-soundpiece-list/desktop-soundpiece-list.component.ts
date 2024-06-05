import { Component } from '@angular/core';
import { Soundpiece } from '../../soundpiece-item/soundpiece.model';
import { SoundpiecesService } from '../soundpieces.service';

@Component({
  selector: 'app-desktop-soundpiece-list',
  templateUrl: './desktop-soundpiece-list.component.html',
  styleUrl: './desktop-soundpiece-list.component.sass'
})

export class DesktopSoundpieceListComponent {
  soundpieces: Soundpiece[] = [];

  constructor(private soundService: SoundpiecesService) {}

  ngOnInit(): void {
    this.soundService.getSoundPieces().subscribe(data => {
      this.soundpieces = data
      console.log(this.soundpieces[0].link)
      console.log(this.soundpieces[0].author)
      console.log(this.soundpieces[0].title)
    })
  }

}