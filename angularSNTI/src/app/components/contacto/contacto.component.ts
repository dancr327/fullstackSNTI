import { Component } from '@angular/core';
import { inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {
  private http = inject(HttpClient);

  contactos: any[] = [];

  ngOnInit() {
    this.http.get<any[]>('/assets/textos/contactos.json').subscribe({
      next: data => this.contactos = data,
      error: err => console.error('Error al cargar los contactos:', err)
    });
  }

}
