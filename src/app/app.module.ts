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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
