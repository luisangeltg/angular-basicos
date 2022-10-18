import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  //styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService) { }

  @Input() nuevo: Personaje = {
    nombre: "",
    poder: 0,
  }
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    //this.onNuevoPersonaje.emit(this.nuevo);
    //Limpia el objeto del state form
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: "",
      poder: 0,
    }

  }
}
