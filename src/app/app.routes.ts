import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaprodutoComponent } from './pages/listas/listaproduto/listaproduto.component';
import { NovoProdutoComponent } from './pages/cadastro/produto/novo-produto/novo-produto.component';
import { EditarComponent } from './pages/cadastro/produto/editar/editar.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "listaProduto", component: ListaprodutoComponent},
    {path: "listaProduto/novo/produto", component: NovoProdutoComponent},
    {path: "listaProduto/editar/produto/:id", component: EditarComponent},
];
