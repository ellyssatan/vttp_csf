import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game.component';
import { CommentComponent } from './components/comment.component';
import { RouterModule, Routes } from '@angular/router';
import { BGGService } from './bgg.service';

const appRoutes : Routes = [
  { path: '', component: GameComponent },
  { path: 'games', component: GameComponent },
  { path: 'game/:gameId/comments', component: CommentComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [ BGGService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
