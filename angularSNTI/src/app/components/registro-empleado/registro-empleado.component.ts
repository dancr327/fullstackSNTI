import { Component } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registro-empleado',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro-empleado.component.html',
  styleUrl: './registro-empleado.component.css'
})
export class RegistroEmpleadoComponent {

//getters para acceder a los controles del formulario
// de manera mas sencilla, sin tener que escribir formEmpleado.get('name') cada vez
get name(){
  return this.formEmpleado.get('name') as FormControl;
}
get email(){
  return this.formEmpleado.get('email') as FormControl;
}
get apellidoPaterno(){
  return this.formEmpleado.get('apellidoPaterno') as FormControl;
}
get apellidoMaterno(){
  return this.formEmpleado.get('apellidoMaterno') as FormControl;
}
get fechaNacimiento(){
  return this.formEmpleado.get('fechaNacimiento') as FormControl;
}
get sexo(){
  return this.formEmpleado.get('sexo') as FormControl;
}
get curp(){
  return this.formEmpleado.get('curp') as FormControl;
}
get rfc(){
  return this.formEmpleado.get('rfc') as FormControl;
}
get estadoCivil(){
  return this.formEmpleado.get('estadoCivil') as FormControl;
}
get numeroHijos(){
  return this.formEmpleado.get('numeroHijos') as FormControl;
}
get numeroPlaza(){
  return this.formEmpleado.get('numeroPlaza') as FormControl;
}
get fechaIngreso(){
  return this.formEmpleado.get('fechaIngreso') as FormControl;
}
get fechaIngresoGobierno(){
  return this.formEmpleado.get('fechaIngresoGobierno') as FormControl;
}
get nivelPuesto(){
  return this.formEmpleado.get('nivelPuesto') as FormControl;
}
get nombrePuesto(){
  return this.formEmpleado.get('nombrePuesto') as FormControl;
}
get puestoINPI(){
  return this.formEmpleado.get('puestoINPI') as FormControl;
}
get nivelEstudios(){
  return this.formEmpleado.get('nivelEstudios') as FormControl;
}
get institucionEstudios(){
  return this.formEmpleado.get('institucionEstudios') as FormControl;
}
get plazaBase(){
  return this.formEmpleado.get('plazaBase') as FormControl;
}
get fechaActualizacion(){
  return this.formEmpleado.get('fechaActualizacion') as FormControl;
}

  formEmpleado= new FormGroup({ 
   // con validators.riquired se indica que el campo es requerido
    'name': new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-zÁÉÍÓÚÑáéíóúüÜ0-9][A-Za-zÁÉÍÓÚÑáéíóúüÜ0-9\s.'-]*$/)]),
     // cuando quiero implementar mas de una validacion, se hace con un array
  // en este caso "el campo es requerido" y "tiene que ser un email"
    'email': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    'apellidoPaterno': new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-zÁÉÍÓÚÑáéíóúüÜ0-9][A-Za-zÁÉÍÓÚÑáéíóúüÜ0-9\s.'-]*$/)]),
    'apellidoMaterno': new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-zÁÉÍÓÚÑáéíóúüÜ0-9][A-Za-zÁÉÍÓÚÑáéíóúüÜ0-9\s.'-]*$/)]),
    'fechaNacimiento': new FormControl('',[Validators.required,this.validarRangoEdad()]),
    'sexo': new FormControl('',Validators.required),
    'curp': new FormControl('', [Validators.required, Validators.pattern(/^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z\d]{2}$/)]),
    'rfc':new FormControl ('', [Validators.required, Validators.pattern(/^([A-ZÑ&]{3,4})\d{6}([A-Z\d]{3})$/)]),
    'estadoCivil': new FormControl('',Validators.required),
    'numeroHijos': new FormControl(0,[Validators.required, Validators.min(0), Validators.max(10)]),
    'numeroPlaza': new FormControl('',[Validators.required,Validators.min(0), Validators.max(1000)]),
    'fechaIngreso': new FormControl('',[Validators.required, this.validarAntiguedadDesde1980()]),
    'fechaIngresoGobierno': new FormControl ('', [Validators.required, this.validarAntiguedadMaxima()]),
    'nivelPuesto': new FormControl('',Validators.required),
    'nombrePuesto': new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-zÁÉÍÓÚÑáéíóúüÜ0-9][A-Za-zÁÉÍÓÚÑáéíóúüÜ0-9\s.'-]*$/)]),
    'puestoINPI': new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-zÁÉÍÓÚÑáéíóúüÜ0-9][A-Za-zÁÉÍÓÚÑáéíóúüÜ0-9\s.'-]*$/)]),
    'nivelEstudios': new FormControl('',Validators.required),
    'institucionEstudios': new FormControl ('',[Validators.required,Validators.pattern(/^[A-Za-zÁÉÍÓÚÑáéíóúüÜ0-9][A-Za-zÁÉÍÓÚÑáéíóúüÜ0-9\s.'-]*$/)]),
    'plazaBase': new FormControl ('',[Validators.required,Validators.pattern(/^[A-Za-zÁÉÍÓÚÑáéíóúüÜ0-9][A-Za-zÁÉÍÓÚÑáéíóúüÜ0-9\s.'-]*$/)]),
    'fechaActualizacion': new FormControl (this.formatearFechaParaInput(new Date()), [Validators.required, this.validarFechaDesde2024()]),
  });


 
  mostarDatos(){
    console.log(this.formEmpleado.value);
  }

// CODIGO fechas

// Fechas límite para validaciones
hoy = new Date();
fechaMinNacimiento = new Date('1950-01-01');
fechaMaxNacimiento = new Date();
fechaMinIngreso = new Date('1980-01-01');
fechaMinIngresoGobierno = new Date('1980-01-01');
fechaMinActualizacion = new Date('2024-01-01');

constructor(private fb: FormBuilder) {
  this.fechaMaxNacimiento.setFullYear(this.hoy.getFullYear() - 18);
}

// Valida que la fecha de nacimiento sea entre 1 enero 1950 y hace 18 años
validarRangoEdad(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    const fecha = new Date(control.value);
    if (fecha < this.fechaMinNacimiento || fecha > this.fechaMaxNacimiento) {
      return { edadInvalida: true };
    }
    return null;
  };
}

// Valida que la fecha de ingreso sea entre 1 enero 1980 y hoy
validarAntiguedadDesde1980(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    const fecha = new Date(control.value);
    if (fecha < this.fechaMinIngreso || fecha > this.hoy) {
      return { antiguedadInvalida: true };
    }
    return null;
  };
}
validarAntiguedadMaxima(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    const fecha = new Date(control.value);
    if (fecha < this.fechaMinIngresoGobierno || fecha > this.hoy) {
      return { antiguedadGobiernoInvalida: true };
    }
    return null;
  }
  };
  // formatearFechaParaInput que convierte la fecha actual (Date) en un string con el formato YYYY-MM-DD, que es el formato que entienden los inputs tipo date en HTML.
  formatearFechaParaInput(fecha: Date): string {
    const year = fecha.getFullYear();
    const month = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const day = fecha.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  validarFechaDesde2024(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const fecha = new Date(control.value);
      if (!control.value) return null;
  
      const fechaMin = new Date('2024-01-01');
      fechaMin.setHours(0, 0, 0, 0); // aseguramos que no haya errores por tiempo
  
      return fecha < fechaMin || fecha > this.hoy
        ? { fechaFueraDeRango: true }
        : null;
    };
  }
  



//metodo uppercase para convertir el texto a mayusculas
toUppercase(controlName: string, event: Event) {
  const input = event.target as HTMLInputElement;
  const uppercaseValue = input.value.toUpperCase();
  this.formEmpleado.get(controlName)?.setValue(uppercaseValue);
}
 
}
