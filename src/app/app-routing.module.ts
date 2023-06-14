import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArenaComponent } from './arena/arena.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '',   title :'Home', component : AppComponent },
  { path: 'arena', title:'Arena', component: ArenaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
