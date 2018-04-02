import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { VideosComponent } from './videos/videos.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//bootstrap
import { AlertModule } from 'ngx-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ContactoComponent } from './contacto/contacto.component';

//ngx vootstrap
import { ModalModule } from 'ngx-bootstrap/modal';

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

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

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
    FormsModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ScrollToModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatMenuModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
