import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router'; // 路由


import { AppComponent } from './app.component';
import {HeroDetailComponent} from './business/hero-detail/hero-detail.component';
import {HeroesComponent} from './business/heroes/heroes.component';
import {HeroService} from './general/service/hero-service/hero.service';
import {DashboardComponent} from './business/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule, // 路由
    /*RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
    ])*/
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
