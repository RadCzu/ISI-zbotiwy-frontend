import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Soundpiece } from '../soundpiece-item/soundpiece.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SoundpiecesService {

  private apiUrl = 'http://192.168.88.120:8080/api/soundpieces';
  private currentSoundpieceSubject = new BehaviorSubject<Soundpiece | null>(null);
  currentSoundpiece$ = this.currentSoundpieceSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) { }

  getSoundPieces(): Observable<Soundpiece[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(headers)
    return this.http.get<Soundpiece[]>(this.apiUrl, { headers });
  }

  setCurrentSoundpiece(soundpiece: Soundpiece) {
    this.currentSoundpieceSubject.next(soundpiece);
  }

  getCurrentSoundpiece(): Soundpiece | null {
    return this.currentSoundpieceSubject.value;
  }
}
