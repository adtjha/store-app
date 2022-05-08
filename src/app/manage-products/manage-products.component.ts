import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state';
import { AddProduct, RemoveProduct } from '../state/products.action';
import { Products } from '../state/products.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styles: [],
})
export class ManageProductsComponent implements OnInit {
  products: Observable<Products>;
  checkoutForm = this.formBuilder.group({
    name: '',
    price: '',
    description: '',
    imgUrl: '',
  });

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {
    this.products = this.store.select('products');
  }

  ngOnInit(): void {}

  addProduct = () => {
    this.store.dispatch(new AddProduct({ ...this.checkoutForm.value }));
    this.checkoutForm.reset();
  };

  removeProduct = (id: number | undefined) => {
    if (id) this.store.dispatch(new RemoveProduct(id));
  };

  onUploadChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded = (e: any) => (this.checkoutForm.value.imgUrl = `data:image/png;base64,${btoa(e.target.result)}`);
}
