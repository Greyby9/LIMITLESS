import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="product-detail">
      <div class="image-gallery">
        <img class="main-image" [src]="currentImage" [alt]="nombre" />
        <div class="thumbnails">
          <img 
            *ngFor="let thumbnail of thumbnails" 
            [src]="thumbnail" 
            [alt]="nombre" 
            (click)="currentImage = thumbnail" 
            [class.active]="thumbnail === currentImage" />
        </div>
      </div>
      <div class="product-info">
        <h2>{{nombre}}</h2>
        <p>{{descripcion}}</p>
        <p><strong>Precio:</strong> {{precio | currency}}</p>
        <div class="sizes">
          <label for="size">Selecciona tu talla:</label>
          <select id="size" [(ngModel)]="selectedSize">
            <option *ngFor="let size of sizes" [value]="size">{{size}}</option>
          </select>
        </div>
        <button (click)="addToCart()">Añadir al carrito</button>
      </div>
    </div>
  `,
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent {
  // Entradas dinámicas para reutilizar el componente
  @Input() nombre: string = '';
  @Input() descripcion: string = '';
  @Input() precio: number = 0;
  @Input() thumbnails: string[] = [];
  
  // Imagen actualmente mostrada como la principal
  currentImage: string = '';
 
  // Tallas disponibles para la selección
  sizes = ['S', 'M', 'L', 'XL', 'XXL'];
 
  // Talla seleccionada por el usuario
  selectedSize = 'M';
 
  // Función para simular agregar el producto al carrito
  addToCart() {
    alert(`Has añadido una camiseta "${this.nombre}" de talla ${this.selectedSize} al carrito.`);
  }

  // Establece la imagen principal por defecto al cargar el componente
  ngOnChanges() {
    if (this.thumbnails && this.thumbnails.length > 0) {
      this.currentImage = this.thumbnails[0];
    }
  }
}
