import { Component } from '@angular/core';
import { ProductList } from './components/product-list/product-list';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from './data/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products = PRODUCTS;

  selectedCategoryId: number | null = null;

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  getFilteredProducts(): Product[] {
    if (this.selectedCategoryId === null) {
      return [];
    }

    return this.products.filter(
      p => p.categoryId === this.selectedCategoryId
    );
  }

  onDeleteFromApp(id: number) {
  this.products = this.products.filter(p => p.id !== id);
}
}