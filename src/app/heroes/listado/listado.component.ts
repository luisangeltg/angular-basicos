import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //styleUrls: ["../../app.component.css"]
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitán América"];
  heroeBorrado: string = "";

  pop(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
