import { Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import { ContatoComponent} from './contato/contato.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { EsqueceuPassComponent } from './esqueceu-pass/esqueceu-pass.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { CarritoComponent } from './carrito/carrito.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'Contato', component: ContatoComponent },
    { path: 'Sobre-nos', component: SobreNosComponent },
    { path: 'recuperar-a-pass', component: EsqueceuPassComponent },   
    { path: 'uno', component: DetailProductComponent },
    { path: 'dos', component: DetailProductComponent },
    { path: 'criarConta', component: CriarContaComponent },
    {path: 'carrito', component: CarritoComponent}
  
  
];
