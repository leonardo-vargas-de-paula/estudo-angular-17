import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  imports: [MatCardModule, MatButtonModule],
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
