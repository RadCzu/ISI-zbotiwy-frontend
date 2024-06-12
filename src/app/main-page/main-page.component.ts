import { Component } from '@angular/core';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.sass'
})
export class MainPageComponent {
  constructor(public deviceService: DeviceService) {}
}
