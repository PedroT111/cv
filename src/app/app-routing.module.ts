import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MicafeappPageComponent } from './pages/micafeapp-page/micafeapp-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'micafeapp', component: MicafeappPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
