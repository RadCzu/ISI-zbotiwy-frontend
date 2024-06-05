import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DesktopHelloWorldComponent } from './desktop-hello-world/desktop-hello-world.component';
import { MobileHelloWorldComponent } from './mobile-hello-world/mobile-hello-world.component';
import { DeviceService } from './device.service';
import { HttpClientModule } from '@angular/common/http';
import { DesktopSoundpieceListComponent } from './soundpiece-list/desktop-soundpiece-list/desktop-soundpiece-list.component';
import { DesktopMainLayoutComponent } from './main-layout/desktop-main-layout/desktop-main-layout.component';
import { SoundpieceItemComponent } from './soundpiece-item/soundpiece-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MobileHelloWorldComponent,
    SoundpieceItemComponent,
    DesktopHelloWorldComponent,
    DesktopSoundpieceListComponent,
    DesktopMainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
