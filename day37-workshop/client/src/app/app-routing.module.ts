import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { CameraComponent } from './components/camera.component';
import { ResultComponent } from './components/result.component';

const appsRoute: Routes = [
  { path: '', component: CameraComponent},
  { path: 'upload', component: ResultComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appsRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }