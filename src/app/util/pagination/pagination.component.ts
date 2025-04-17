import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatPaginatorIntl, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
  providers: [{provide: MatPaginatorIntl}]
})
export class PaginationComponent {
  @Output() page = new EventEmitter<PageEvent>();
  @Input() pageSize: number = 2;
  @Input() pageIndex: number = 0;
  @Input() length: number = 50;

  alterarPagina($event: PageEvent) {
    this.page.emit($event);
  }

}
