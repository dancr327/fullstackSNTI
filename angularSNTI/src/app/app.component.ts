import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

import { RouterOutlet } from '@angular/router'; //El router-outlet es el lugar donde el Router renderizará el componente asociado a la ruta actual.

//reactivFormsModule es un módulo que proporciona una forma de trabajar con formularios reactivos en Angular.
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet,ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'frontSNTI';

}
