import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingRoutes } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [CommonModule, AuthRoutingRoutes, SharedModule],
  declarations: [AuthComponent, LoginComponent],
})
export class AuthModule {}
