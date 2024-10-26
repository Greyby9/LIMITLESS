import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ListaProductComponent } from '../lista-product/lista-product.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ListaProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
