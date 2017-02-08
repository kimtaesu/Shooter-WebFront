import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import "hammerjs";
import {LoginComponent} from "./login/login.component";
import {AuthServiceProvider} from "../common/auth/auth-http.provider";
import {AuthService} from "../common/auth/auth-http.service";
import {HttpModule} from "@angular/http";
import {LoginService} from "./login/login-http.service";
import { JoinComponent } from './join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JoinComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [AuthServiceProvider, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
