// src/app/device.service.ts

import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }
}