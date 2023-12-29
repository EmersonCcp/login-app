import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingRoutes } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, DashboardRoutingRoutes, SharedModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
