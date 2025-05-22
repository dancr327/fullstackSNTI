import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// export interface Trabajador {
//   nombre: string;
//   apellido_paterno: string;
//   apellido_materno?: string;
//   fecha_nacimiento: string;
//   sexo: string;
//   curp: string;
//   rfc: string;
//   email: string;
//   situacion_sentimental?: string;
//   numero_hijos: number;
//   numero_empleado: string;
//   numero_plaza: string;
//   fecha_ingreso: string;
//   fecha_ingreso_gobierno: string;
//   nivel_puesto: string;
//   nombre_puesto: string;
//   puesto_inpi?: string;
//   adscripcion: string;
//   id_seccion: number;
//   nivel_estudios?: string;
//   institucion_estudios?: string;
//   certificado_estudios?: boolean;
//   plaza_base?: string;
//   fecha_actualizacion?: string;
// }



@Injectable({
  providedIn: 'root'
})

export class TrabajadorService {
  // private API_URL = 'http://localhost:5432/trabajadores'; // Ajusta según tu backend

  // constructor(private http: HttpClient) {}

  // crearTrabajador(data: Trabajador): Observable<any> {
  //   return this.http.post(this.API_URL, data);
  // }
}

