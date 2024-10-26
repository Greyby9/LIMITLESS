import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent {
   // Lista de imágenes para las miniaturas y la imagen principal
   thumbnails = ['assets/thumb1.jpg', 'assets/thumb2.jpg', 'assets/thumb3.jpg', 'assets/thumb4.jpg'];
  
   // Imagen actualmente mostrada como la principal
   currentImage = this.thumbnails[0];
 
   // Tallas disponibles para la selección
   sizes = ['S', 'M', 'L', 'XL', 'XXL'];
 
   // Talla seleccionada por el usuario
   selectedSize = 'XXL';
 
   // Función para simular agregar el producto al carrito
   addToCart() {
     alert(`Has añadido una camiseta de talla ${this.selectedSize} al carrito.`);
   }

}
