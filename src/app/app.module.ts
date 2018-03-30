import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { VideosComponent } from './videos/videos.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//bootstrap
import { AlertModule } from 'ngx-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ContactoComponent } from './contacto/contacto.component';

//material design modules
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { TresComponent } from './tres/tres.component';
import { CuatroComponent } from './cuatro/cuatro.component';
import { VideoUnoComponent } from './videos/video-uno/video-uno.component';
import { VideoDosComponent } from './videos/video-dos/video-dos.component';
import { VideoTresComponent } from './videos/video-tres/video-tres.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    VideosComponent,
    NavbarComponent,
    ContactoComponent,
    UnoComponent,
    DosComponent,
    TresComponent,
    CuatroComponent,
    VideoUnoComponent,
    VideoDosComponent,
    VideoTresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ScrollToModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
