import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [],
})
export class ProductComponent implements OnInit {
  product = {
    imgUrl: 'https://via.placeholder.com/288x288.png',
    name: 'Cobol 101 vintage',
    price: '1995',
    description: 'Learn COBOL with this vintage gear.',
  };

  constructor() {}

  ngOnInit(): void {}
}
