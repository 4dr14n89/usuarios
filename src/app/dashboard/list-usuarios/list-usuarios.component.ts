import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  listUsers:User[] = [];

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getAllUsers().subscribe( resp =>{
      this.listUsers = resp ;
    });
  }

}
