import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingModule } from './users-routing.module';
import { ListarUsersComponent } from './components/listar-users/listar-users.component';
import { GuardarUserComponent } from './components/guardar-user/guardar-user.component';

@NgModule({
  imports: [CommonModule, SharedModule, UserRoutingModule],
  declarations: [UsersComponent, ListarUsersComponent, GuardarUserComponent],
})
export class UsersModule {}
