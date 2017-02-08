import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import {MaterialModule} from "@angular/material";
import {LoginComponent} from "./login/login.component";
import "hammerjs";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
