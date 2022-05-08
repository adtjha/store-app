import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state';
import { Products } from '../state/products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [],
})
export class ProductListComponent implements OnInit {
  products: Observable<Products>;

  constructor(private store: Store<AppState>) {
    this.products = this.store.select('products');
  }

  ngOnInit(): void {}
}
