import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  httpClient = inject(HttpClient);
  products: any[] = [];

  productsSevice = inject(ProductService);

  ngOnInit() {
    this.productsSevice.getAll().subscribe((products)=>{
      this.products=products;
    })
  }
}
