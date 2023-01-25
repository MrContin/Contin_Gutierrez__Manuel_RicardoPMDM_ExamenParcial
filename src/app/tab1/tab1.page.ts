import { Producto } from './../interfaces/mis-interfaces';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GestionListaService } from '../servicios/gestion-lista.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  datosProducto: Producto = {
    "id": 3,
    "titulo": 	"Mens Cotton Jacket",
    "foto": 	"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "valoracion": 4.7
  };
  
 constructor(private leerFichero: HttpClient, public servicioLista: GestionListaService) {

 }

 // Método que realiza una consulta REST a fakestoreapi.com
 private consultaRest(): void {
  let observableGet: Observable<Producto> = this.leerFichero.get<Producto>("https://fakestoreapi.com/products/12");
  observableGet.subscribe( datos => {
    //console.log(datos);
    this.servicioLista.addProducto(datos);//se añade al metodo de service la consulta get
  });
  
  

  
 }

 // Método que genera un número aleatorio entre 1 y 20
 private generaIndice(): number {
   return Math.floor(Math.random() * 19) + 1;
 }
}
