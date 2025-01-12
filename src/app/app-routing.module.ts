import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContatoComponent } from './contato/contato.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { EsqueceuPassComponent } from './esqueceu-pass/esqueceu-pass.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Contato', component: ContatoComponent },
  { path: 'Sobre-nos', component: SobreNosComponent },
  { path: 'uno', component: DetailProductComponent },
  { path: 'dos', component: DetailProductComponent },
  { path: 'recuperar-a-pass', component: EsqueceuPassComponent }, 
  { path: 'criarConta', component: CriarContaComponent }, 
  { path: 'Carrito' , component: CarritoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

