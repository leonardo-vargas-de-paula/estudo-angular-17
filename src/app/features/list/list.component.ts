import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card.component';

@Component({
  selector: 'app-list',
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  httpClient = inject(HttpClient);
  products: Product[] = [];

  productsSevice = inject(ProductService);

  ngOnInit() {
    this.productsSevice.getAll().subscribe((products)=>{
      this.products=products;
    })
  }
}
