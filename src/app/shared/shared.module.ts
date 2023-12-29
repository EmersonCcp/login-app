import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  exports: [FormsModule, ReactiveFormsModule, MenuComponent, MatDialogModule],
  declarations: [MenuComponent],
})
export class SharedModule {}
