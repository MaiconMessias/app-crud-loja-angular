import { Component, inject } from '@angular/core';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from '../../service/loading.service';


@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  template: ` @if (loadingService.isLoading()) {
      <div class="loading-overlay">
        <mat-spinner diameter="60"></mat-spinner>
      </div>
    }
`,
  styles: [`
    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
  `]
})
export class LoadingComponent {
  protected loadingService = inject(LoadingService);
}
