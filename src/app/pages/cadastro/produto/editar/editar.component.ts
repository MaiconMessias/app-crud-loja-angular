import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProdutoService } from '../../../../service/produto.service';
import { TemplateFormProdutoComponent } from '../template/template-form-produto/template-form-produto.component';
import { Produto } from '../../../../entities/Produto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessagesService } from '../../../../service/messages.service';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [TemplateFormProdutoComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
  btnText = "Editar Dados";
  produto!: Produto;

  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              private produtoService: ProdutoService,
              private messageService: MessagesService){}
  ngOnInit(): void {
    const id = Number(this.activateRoute.snapshot.paramMap.get("id"));
    this.getProduto(id);
  }

  async getProduto(id: number){
    await this.produtoService.getProduto(id).subscribe((prod) => { (this.produto = prod)  } );
  }

  async editarProdutoHandler(prod: Produto){
    const formData = new FormData();

    formData.append("titulo", prod.titulo);
    formData.append("descricao", prod.descricao);
    formData.append("preco", String(prod.preco));
    if (String(prod.foto) != '') {
      formData.append("foto", prod.foto);
    }

    await this.produtoService.editaProduto(formData, prod.id!).subscribe(() => { 
      //window.location.reload(); 
      this.messageService.add("Produto editado com sucesso !");

      this.router.navigate(["/listaProduto"])
    });
    

  }

}
