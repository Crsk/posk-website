import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { VideoUnoComponent } from './videos/video-uno/video-uno.component';
import { VideoDosComponent } from './videos/video-dos/video-dos.component';
import { VideoTresComponent } from './videos/video-tres/video-tres.component';

const routes: Routes = [
  
  { path: 'video-uno', component: VideoUnoComponent },
  { path: 'video-dos', component: VideoDosComponent },
  { path: 'video-tres', component: VideoTresComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
