import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MicafeappPageComponent } from './pages/micafeapp-page/micafeapp-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'project-micafeapp', component: MicafeappPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration:'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
