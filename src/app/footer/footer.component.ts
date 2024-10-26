import { Component } from '@angular/core';

import { ContatoComponent } from '../contato/contato.component';
import { SobreNosComponent } from '../sobre-nos/sobre-nos.component';

import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContatoComponent, SobreNosComponent, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
