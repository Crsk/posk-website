import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  {
    path: 'videos',
    component: VideosComponent,
    data: { title: 'Videos' }
  },
  { path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  { path: '**', component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
