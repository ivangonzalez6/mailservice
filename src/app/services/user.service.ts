import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';
import { GLOBAL } from './GLOBAL';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { LoginModel } from 'src/app/models/loginModel';
import { EmailModel } from 'src/app/models/emailModel';
import { observable } from 'rxjs';

@Injectable()
export class UserService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
  }

  login(loginModel) {
    interface MyObj {
      correo: string;
      password: number;
    }

    let json = JSON.stringify(loginModel);
    let obj: MyObj = JSON.parse(json);

    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http
      .get(
        this.url +
          'login' +
          '?email=' +
          obj.correo +
          '&password=' +
          obj.password,
        {
          headers,
        }
      )
      .pipe(map((res) => res));
  }

  register(user) {
    interface MyObj {
      nombre: String;
      apellido_paterno: String;
      apellido_materno: String;
      empresa: String;
      correo: String;
      password: String;
      tipo_cuenta: Number;
    }
    let json = JSON.stringify(user);
    let obj: MyObj = JSON.parse(json);
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http
      .get(
        this.url +
          'RegistrarUsuario?nombre=' +
          obj.nombre +
          '&apellido_paterno=' +
          obj.apellido_paterno +
          '&apellido_materno=' +
          obj.apellido_materno +
          '&correo=' +
          obj.correo +
          '&password=' +
          obj.password +
          '&tipo_cuenta=' +
          obj.tipo_cuenta,
        { headers }
      )
      .pipe(map((res) => res));
  }

  registerReceiver(email) {
    interface MyObj {
      nombre_receptor: String;
      email_receptor: String;
      us_id: String;
    }
    let json = JSON.stringify(email);
    let obj: MyObj = JSON.parse(json);
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http
      .get(
        this.url +
          'RegistrarReceptor?nombre_receptor=' +
          obj.nombre_receptor +
          '&email_receptor=' +
          obj.email_receptor +
          '&us_id=' +
          obj.us_id,
        { headers }
      )
      .pipe(map((res) => res));
  }

  sendEmail(emailBody) {
    interface MyObj {
      asunto: String;
      email_receptor: String;
      body: String;
    }
    let json = JSON.stringify(emailBody);
    let obj: MyObj = JSON.parse(json);
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http
      .get(
        this.url +
          'EnviarEmailSql?asunto=' +
          obj.asunto +
          '&email_receptor=' +
          obj.email_receptor +
          '&body=' +
          obj.body,
        { headers }
      )
      .pipe(map((res) => res));
  }

  users: User[] = [];
}
