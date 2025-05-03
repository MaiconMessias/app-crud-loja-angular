import {Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {Usuario} from "../../entities/Usuario";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatMenuModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    usuario!: Usuario;

    ngOnInit(): void {
        this.usuario = JSON.parse(sessionStorage.getItem("usuario")!);
    }



}
