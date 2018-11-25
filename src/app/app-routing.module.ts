import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'portada', pathMatch: 'full' },
  { path: 'portada', loadChildren: './portada/portada.module#PortadaPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'edit', loadChildren: './edit-boda/edit-boda.module#EditBodaPageModule' },
  { path: 'edit/:id', loadChildren: './edit-boda/edit-boda.module#EditBodaPageModule' },
  { path: 'detalle-boda', loadChildren: './detalle-boda/detalle-boda.module#DetalleBodaPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
