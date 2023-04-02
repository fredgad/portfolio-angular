import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from '../shared/features/nav-bar/nav-bar.component';
import { StoreModule } from '@ngrx/store';
import { reducerCube } from '../pages/cube-page/store/cube.reducer';
import { StoreDevModules } from '../config/store/devtool';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavBarComponent,
    StoreModule.forRoot({ Cube: reducerCube }),
    StoreDevModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
