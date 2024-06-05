import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soundpiece } from '../soundpiece-item/soundpiece.model';

@Injectable({
  providedIn: 'root'
})
export class SoundpiecesService {
  private apiUrl = 'http://192.168.88.69:8080/api/soundpieces';

  constructor(private http: HttpClient) { }

  getSoundPieces(): Observable<Soundpiece[]> {
    return this.http.get<Soundpiece[]>(this.apiUrl);
  }
}
