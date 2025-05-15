import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-perfil-admin',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './perfil-admin.component.html',
  styleUrl: './perfil-admin.component.css'
})
export class PerfilAdminComponent {
perfilForm: FormGroup;
  editMode = false;

  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      nombre: [{ value: 'Arturo', disabled: true }, Validators.required],
      apellidoPaterno: [{ value: 'Martínez', disabled: true }, Validators.required],
      apellidoMaterno: [{ value: 'Esparza', disabled: true }, Validators.required],
      fechaNacimiento: [{ value: '', disabled: true }, Validators.required],
      rfc: [{ value: 'RFC', disabled: true }, Validators.required],
      curp: [{ value: '12455FHEJ', disabled: true }, Validators.required]
    });
  }

  toggleEdit() {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.perfilForm.enable();
    } else {
      this.perfilForm.disable();
    }
  }
}
