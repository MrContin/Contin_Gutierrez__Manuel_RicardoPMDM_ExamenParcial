import { Component } from '@angular/core';
import { Producto } from '../interfaces/mis-interfaces';
import { GestionListaService } from '../servicios/gestion-lista.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  public listaProductos: Producto[] =[];
  datosProducto: Producto = {
    "id": 3,
    "titulo": 	"Mens Cotton Jacket",
    "foto": 	"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "valoracion": 4.7
  };
  constructor(public servicio: GestionListaService) {
    this.listaProductos = servicio.getLista();
    console.log(this.datosProducto.foto);
  }

}
