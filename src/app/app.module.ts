import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MdspLogoutComponent } from './mdsp-logout/mdsp-logout.component';
// import { routes } from 'app/routes';


export const webComponents = [
  MdspLogoutComponent,
  AppComponent,
];

@NgModule({
  declarations: [
    // AppComponent,
    // MdspLogoutComponent
    ...webComponents,
  ],
  entryComponents: [
    ...webComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(routes),
  ],
  providers: []
})
export class AppModule {
  ngDoBootstrap() { }
}
