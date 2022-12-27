import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GifGaleryComponent } from './components/gif-galery/gif-galery.component';
import { GifsListComponent } from './components/gifs-list/gifs-list.component';

@NgModule({
  declarations: [AppComponent, GifsListComponent, GifGaleryComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
