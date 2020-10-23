import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
  providers: [UserService],
})
export class RegistroComponent implements OnInit {
  public user: User;

  constructor(public _userService: UserService, private router: Router) {
    this.user = new User('', '', '', '', '', '1');
  }

  ngOnInit(): void {}

  public btnRegister() {
    console.log(this.user);
    this._userService.register(this.user).subscribe(
      (response) => {
        console.log(response);
        alert('Registro hecho correctamente');

        this.router.navigate(['login/']);
      },
      (error) => {
        //Mostrar un error
        console.log(error);
      }
    );
  }
}
