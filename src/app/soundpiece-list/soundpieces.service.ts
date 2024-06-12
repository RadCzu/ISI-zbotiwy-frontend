import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Soundpiece } from '../soundpiece-item/soundpiece.model';

@Injectable({
  providedIn: 'root'
})
export class SoundpiecesService {

  @Injectable({
    providedIn: 'root'
  })
  
  private apiUrl = 'http://192.168.88.120:8080/api/soundpieces';
  private currentSoundpieceSubject = new BehaviorSubject<Soundpiece | null>(null);
  currentSoundpiece$ = this.currentSoundpieceSubject.asObservable();

  constructor(private http: HttpClient) { }

  getSoundPieces(): Observable<Soundpiece[]> {
    return this.http.get<Soundpiece[]>(this.apiUrl);
  }

  setCurrentSoundpiece(soundpiece: Soundpiece) {
    this.currentSoundpieceSubject.next(soundpiece);
  }

  getCurrentSoundpiece(): Soundpiece | null {
    return this.currentSoundpieceSubject.value;
  }
}
