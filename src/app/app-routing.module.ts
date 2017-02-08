import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

