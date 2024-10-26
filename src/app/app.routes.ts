import { Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import { ContatoComponent} from './contato/contato.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { DetailProductComponent } from './detail-product/detail-product.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'Contato', component: ContatoComponent },
    { path: 'Sobre-nos', component: SobreNosComponent },
    { path: 'uno', component: DetailProductComponent }
  
  
];
