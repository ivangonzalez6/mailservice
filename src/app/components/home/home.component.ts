import { Component, OnInit } from '@angular/core';
import { EmailModel } from 'src/app/models/emailModel';
import { EmailBodyModel } from 'src/app/models/emailBodyModel';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  providers: [UserService],
})
export class HomeComponent implements OnInit {
  public emailModel: EmailModel;
  public emailBodyModel: EmailBodyModel;
  nombre = '';
  id = '';
  correo = '';

  constructor(
    public _userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.emailModel = new EmailModel('', '', '');
    this.emailBodyModel = new EmailBodyModel('', '', '');
  }

  ngOnInit() {
    this.nombre = this.route.snapshot.paramMap.get('nombre');
    this.id = this.route.snapshot.paramMap.get('id');
    this.correo = this.route.snapshot.paramMap.get('correo');
  }

  public btnRegisterReceiver() {
    this.emailModel.us_id = this.id;
    console.log(this.emailModel);
    this._userService.registerReceiver(this.emailModel).subscribe(
      (response) => {
        console.log(response);
        alert('Registro hecho correctamente');
        window.location.reload();
      },
      (error) => {
        //Mostrar un error
        console.log(error);
      }
    );
  }

  public btnSendEmail() {
    console.log(this.emailBodyModel);
    this._userService.sendEmail(this.emailBodyModel).subscribe(
      (response) => {
        console.log(response);
        alert('Email Enviado');
        window.location.reload();
      },
      (error) => {
        //Mostrar un error
        console.log(error);
      }
    );
  }
}
