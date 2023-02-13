import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CitiesComponent } from './components/cities.component';
import { WeatherComponent } from './components/weather.component';
import { CityListComponent } from './components/city-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WeatherService } from './weather.service';

const appRoutes : Routes = [
	{ path: '', component: CityListComponent},
	{ path: 'city', component: CitiesComponent },
	{ path: 'weather/:city', component: WeatherComponent },
	{ path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    WeatherComponent,
    CityListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, MatToolbarModule,
    MatIconModule, MatListModule, MatCardModule, MatFormFieldModule,
    RouterModule.forRoot(appRoutes), BrowserAnimationsModule
  ],
  providers: [ WeatherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
