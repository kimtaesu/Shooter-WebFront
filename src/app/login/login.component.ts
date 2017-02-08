import {Component} from "@angular/core";
import {AuthService} from "../../common/auth/auth-http.service";
import {Observable} from "rxjs";
import {LoginService} from "./login-http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) {
  }

  onLogin() {
    console.info("click")
    this.loginService.login()
      .subscribe((res) => {

      });
  }

  // onLogin() {
  //   console.info("doLogin")
  //   let headers = new Headers({
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   });
  //   let loginUser = new LoginUser('password', 'test', 'test1');
  //   console.info("before login")
  //   this.http
  //     .post('http://localhost:8180/oauth/token', {})
  //     .map((r: Response) => {
  //       console.info('Response', r.toString());
  //     })
  //     .catch((error: any) => {
  //       console.error('An friendly error occurred', error);
  //       return Observable.throw(error.message || error);
  //     }).subscribe();
  //   console.info("after login")
  //   // this.http.post("http://localhost:8180/oauth/token", {body: loginUser}, {headers: headers})
  //   //   .map((response: Response) => {
  //   //     console.info('Response', response.json());
  //   //   })
  //   //   .catch((error: any) => {
  //   //     console.error('An friendly error occurred', error);
  //   //     return Observable.throw(error.message || error);
  //   //   });
  //   // console.info("after login")
  // }
}
