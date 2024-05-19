import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { DesktopHelloWorldComponent } from './desktop-hello-world/desktop-hello-world.component';
import { MobileHelloWorldComponent } from './mobile-hello-world/mobile-hello-world.component';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  constructor(public deviceService: DeviceService) {}
  title = 'frontend';
}
