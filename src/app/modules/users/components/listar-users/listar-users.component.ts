import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services';

@Component({
  selector: 'app-listar-users',
  templateUrl: './listar-users.component.html',
  styleUrls: ['./listar-users.component.scss'],
})
export class ListarUsersComponent implements OnInit {
  constructor(private userService: UsersService) {}

  ngOnInit() {}
}
