import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{ path: 'login', component: LoginComponent }];

export const AuthRoutingRoutes = RouterModule.forChild(routes);
