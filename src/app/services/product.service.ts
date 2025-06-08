import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private key = 'products';

  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }

  getProducts(): any[] {
    if (this.isLocalStorageAvailable()) {
      return JSON.parse(localStorage.getItem(this.key) || '[]');
    }
    return [];
  }

  getProduct(id: number): any {
    return this.getProducts().find(p => p.id === id);
  }

  addProduct(product: any): void {
    if (this.isLocalStorageAvailable()) {
      const products = this.getProducts();
      product.id = Date.now(); // ID único
      products.push(product);
      localStorage.setItem(this.key, JSON.stringify(products));
    }
  }

  updateProduct(id: number, updated: any): void {
    if (this.isLocalStorageAvailable()) {
      const products = this.getProducts().map(p => p.id === id ? { ...p, ...updated } : p);
      localStorage.setItem(this.key, JSON.stringify(products));
    }
  }

  deleteProduct(id: number): void {
    if (this.isLocalStorageAvailable()) {
      const products = this.getProducts().filter(p => p.id !== id);
      localStorage.setItem(this.key, JSON.stringify(products));
    }
  }
}
