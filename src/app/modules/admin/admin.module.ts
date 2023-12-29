import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdmindRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, AdmindRoutingModule, SharedModule],
  declarations: [AdminComponent],
})
export class AdminModule {}
