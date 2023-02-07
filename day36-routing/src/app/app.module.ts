import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DogComponent } from './components/dog.component';
import { CatComponent } from './components/cat.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { CustomerComponent } from './components/customer.component';
import { ReactiveFormsModule } from '@angular/forms';

// view / routes
const appRoutes: Routes = [
  { path : '', component : HomeComponent  },
  { path : 'cat', component : CatComponent  },
  { path : 'dog', component : DogComponent  },
  { path : 'customer/:custName', component : CustomerComponent  },
  { path : '**', redirectTo : '/', pathMatch : 'full'  },
]

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    CatComponent,
    HomeComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
