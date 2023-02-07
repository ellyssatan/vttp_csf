import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormService } from './form.service';
import { RouterModule } from '@angular/router';
import { CommentComponent } from './components/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot([
      {path: "", component: RegisterComponent},
      {path: "login", component: LoginComponent},
      {path: "addComment", component: CommentComponent}
    ])
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
