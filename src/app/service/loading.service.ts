import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private activeRequests = 0;
  isLoading = signal<boolean>(false);
  
  show(): void {
    if (this.activeRequests === 0){
      this.isLoading.set(true);
    }
    this.activeRequests++;
  }

  hide(): void {
    this.activeRequests--;
    if (this.activeRequests <= 0){
      this.activeRequests = 0;
      this.isLoading.set(false);
    }
  }
}
