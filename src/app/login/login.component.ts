import {Component} from "@angular/core";
import {Http} from "@angular/http";

@Component({
  selector: 'login-selector',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: Http) {
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
class LoginUser {
  constructor(grant_type: string, username: string, password: string) {
  }

}
