import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-guardar-user',
  templateUrl: './guardar-user.component.html',
  styleUrls: ['./guardar-user.component.scss'],
})
export class GuardarUserComponent implements OnInit {
  userForm!: FormGroup;

  rolesArray = [
    {
      id: 'ADMIN',
    },
    {
      id: 'VENDEDOR',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      roles: this.buildRolesFormArray(), // Inicializado como un array vacío
    });
  }

  ngOnInit() {}

  ngSubmit() {
    console.log(this.userForm.value);
  }

  // Método para construir el FormArray para roles
  private buildRolesFormArray(): FormArray {
    const formArray = this.fb.array([]);
    this.rolesArray.forEach((role) => {
      formArray.push(this.fb.control(false));
    });
    return formArray;
  }

  // Método para agregar o eliminar un rol del FormArray 'roles'
  toggleRole(index: number) {
    debugger;
    const rolesArray = this.userForm.get('roles') as FormArray;
    const currentRoleValue = rolesArray.at(index).value;

    rolesArray.at(index).setValue(!currentRoleValue);
  }
}
