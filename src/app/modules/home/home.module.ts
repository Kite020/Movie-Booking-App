import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Routes = [
  { path: '', component: MovieListComponent }
];

@NgModule({
  declarations: [ /* no MovieListComponent here! */ ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MovieListComponent  // <-- Import the standalone component here instead of declaring
  ]
})
export class HomeModule { }
