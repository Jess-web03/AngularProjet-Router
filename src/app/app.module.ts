import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DestinationsComponent } from './destinations/destinations.component';

const routes: Routes = [
  { path:"", component:HomepageComponent},
  { path: 'destinations', component: DestinationsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DestinationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
