import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id:number;
  user:User;

  constructor(private route:ActivatedRoute,private usuarioService:UsuarioService) { 
    this.id = parseInt( this.route.snapshot.paramMap.get('id') );
    this.usuarioService.getUserById(this.id).subscribe( resp =>{
      this.user =  resp;
    })
  }

  ngOnInit(): void {
  }

}
