import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styles: [],
})
export class ManageProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  addProduct = () => {
    console.log('Add Product.');
  };

  removeProduct = () => {
    console.log('Remove Product.');
  };
}
