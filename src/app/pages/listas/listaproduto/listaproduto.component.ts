import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../entities/Produto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../../service/produto.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { Util } from '../../../util/util';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MessagesService } from '../../../service/messages.service';
import {PaginationComponent} from "../../../util/pagination/pagination.component";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-listaproduto',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, MatCardModule, MatButtonModule, PaginationComponent],
  templateUrl: './listaproduto.component.html',
  styleUrl: './listaproduto.component.css'
})
export class ListaprodutoComponent implements OnInit {

    listaProduto?: Produto[];
  // TODO paginação
  pageSize: number = 2;
  pageIndex: number = 0;
  length: number = 50;

    constructor(private produtoService: ProdutoService,
                private util: Util,
                private messageService: MessagesService,
                private router: Router
              ){}

    ngOnInit(): void {
        this.getListaroduto();
    }

  async irParaPagina(numeroPagina: number){
    await this.produtoService.getProdutoPorPagina(numeroPagina, this.pageSize).subscribe((produtos) => this.listaProduto = produtos);
  }

  async getListaroduto(){
      await this.produtoService.getProdutoPorPagina(0, this.pageSize).subscribe((produtos) => this.listaProduto = produtos);
      // atualiza numero de páginas
      await this.produtoService.getProdutos().subscribe((produtos) => this.length = produtos.length);
      // atualiza o indice para a página inicial
      this.pageIndex = 0;
    }

  // Trata e exibe a imagem gravada no bd de tipo blob
  trataImagem(file: Blob){
    return this.util.trataImagem(file);
  }

  deletarProduto(id: number){
    this.produtoService.excluirPrduto(id).subscribe();
    //this.messageService.add("Produto deletado com sucesso !." );
    this.messageService.tempoRestante();
    // TODO colocar tela em modal
    setTimeout(() => {
      window.location.reload();
    }, 4000);

  }

// Paginação
  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.irParaPagina(this.pageIndex);
  }

}
