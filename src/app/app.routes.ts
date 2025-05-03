import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaprodutoComponent } from './pages/listas/listaproduto/listaproduto.component';
import { NovoProdutoComponent } from './pages/cadastro/produto/novo-produto/novo-produto.component';
import { EditarComponent } from './pages/cadastro/produto/editar/editar.component';
import {PaginationComponent} from "./util/pagination/pagination.component";
import {LoginComponent} from "./security/login/login.component";
import {TokenComponent} from "./security/validatoken/token/token.component";

export const routes: Routes = [
    {path: "", component: LoginComponent},
    {path: "home", component: HomeComponent},
    {path: "listaProduto", component: ListaprodutoComponent},
    {path: "listaProduto/novo/produto", component: NovoProdutoComponent},
    {path: "listaProduto/editar/produto/:id", component: EditarComponent},
    {path: "paginacao", component: PaginationComponent},
    {path: "telatoken", component: TokenComponent},
];
