import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/interfaces';
import { UsersService } from 'src/app/services';
import { GuardarUserComponent } from './components/guardar-user/guardar-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UsersService, public dialog: MatDialog) {}

  ngOnInit() {
    this.userService.getAll().subscribe((res) => {
      this.users = res;
      console.log(this.users);
    });
  }

  openDialog(
    enterAnimationDuration: string = '0ms',
    exitAnimationDuration: string = '0ms'
  ): void {
    this.dialog.open(GuardarUserComponent, {
      width: '500px',
      height: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
