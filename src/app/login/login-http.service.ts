import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {AuthService} from "../../common/auth/auth-http.service";
import {ServerAPI} from "../../common/server_api";
@Injectable()
export class LoginService {
  constructor(private authService: AuthService) {
  }

  login(): Observable<Response> {

    return Observable
      .defer(() => {
        return this.authService.getAccessToken();
      })
      .concatMap((res) => {
        return this.authService.post(ServerAPI.login, null);
      })
  }
}
