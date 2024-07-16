import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LastPlayedGamesComponent } from './last-played-games/last-played-games.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LastPlayedGamesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
