import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';    // Para *ngFor y pipes
import { FormsModule } from '@angular/forms';      // Para ngModel
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,     
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './product-list.html',
})
export class ProductListComponent {
  products: any[] = [];
  filterCategory = '';
  filterAvailable = '';

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.service.getProducts();
  }

  deleteProduct(id: number) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.service.deleteProduct(id);
      this.loadProducts();
    }
  }

  filteredProducts() {
    return this.products.filter(p => {
      return (!this.filterCategory || p.category === this.filterCategory) &&
             (!this.filterAvailable || p.available === this.filterAvailable);
    });
  }
}
