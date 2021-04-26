import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user:User;
  imgUrl:string;
  firstName:string;
  email:string;
  id:number;
  constructor() { }

  ngOnInit(): void {
    this.firstName = this.user.name;
    this.email = this.user.email;
    this.imgUrl = 'https://lorempixel.com/250/250/people/?92002';
    this.id = this.user.id;
  }

}
