import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ListaProductComponent } from '../lista-product/lista-product.component';
import { DetailProductComponent } from '../detail-product/detail-product.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ListaProductComponent, DetailProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  template: `
  <div class="tienda">
    <app-detail-product 
      *ngFor="let producto of productos"
      [nombre]="producto.nombre"
      [descripcion]="producto.descripcion"
      [precio]="producto.precio"
      [thumbnails]="producto.thumbnails">
    </app-detail-product>
  </div>
`,
})
export class HomeComponent {
  productos = [
    {
      nombre: 'Camiseta Negra',
      descripcion: 'Camiseta negra unisex de alta calidad.',
      precio: 19.99,
      thumbnails: [
        'https://github.com/Greyby9/imagenes/blob/main/negro-frente.png?raw=true',
        'https://github.com/Greyby9/imagenes/blob/main/mujer-modelo-negro.png?raw=true',
        'https://github.com/Greyby9/imagenes/blob/main/hombre-modelo-negro.png?raw=true'
      ]
    },
    {
      nombre: 'Camiseta Blanca',
      descripcion: 'Camiseta blanca clásica para cualquier ocasión.',
      precio: 15.99,
      thumbnails: [
        'https://github.com/Greyby9/imagenes/blob/main/blanca-frente.png?raw=true',
        'https://github.com/Greyby9/imagenes/blob/main/blanca-modelo-hombre.png?raw=true'
      ]
    }
  ];


}
