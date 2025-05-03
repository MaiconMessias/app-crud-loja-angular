import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Usuario} from "../../entities/Usuario";
import {UsuarioService} from "../../service/usuario.service";
import {Router} from "@angular/router";
import {MessagesService} from "../../service/messages.service";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  btnText: string = "Logar";
  usuario?: Usuario;
  user!: Usuario;
  usuarioForm!: FormGroup;

  constructor(private usuarioService: UsuarioService,
              private router: Router,
              private messageService: MessagesService) {}

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      username: new FormControl(this.usuario?.username ? this.usuario.username : ''),
      senha: new FormControl(this.usuario?.senha ? this.usuario.senha : '')
    });
  }

  get username(){
    return this.usuario?.username;
  }
  get senha(){
    return this.usuario?.senha;
  }

  async validar(user: Usuario){
    const usuarioFormDt = new FormData();
    usuarioFormDt.append("username", user.username);
    usuarioFormDt.append("senha", user.senha);
    await this.usuarioService.validaUsuario(usuarioFormDt)
          .subscribe(usuario => {
            if (usuario == null) {
              this.messageService.add("Usuario e/ou senha invalido !");
              this.router.navigate(["/"])
            } else {
              sessionStorage.setItem("usuario", JSON.stringify(usuario));
              // this.user = JSON.parse(sessionStorage.getItem("usuario")!);
              this.messageService.add("Informe o token");
              this.router.navigate(["/telatoken"])
            }

          })
  }

  cancelar(){}

}
