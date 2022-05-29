
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';



@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  Usuario: Usuario = new Usuario("","","","","",);
  

  constructor(public UsuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.UsuarioService.getUser().subscribe(data =>{this.Usuario = data})
  }

}