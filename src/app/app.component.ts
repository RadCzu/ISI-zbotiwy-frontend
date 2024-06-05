import { Component } from '@angular/core';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  constructor(public deviceService: DeviceService) {}
  title = 'Zbodiwy';

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    document.body.classList.add(savedTheme);
  }

  // Toggle between themes
  toggleTheme(theme: string) {
    document.body.className = ''; 
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }
}
