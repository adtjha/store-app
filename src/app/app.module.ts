import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
@NgModule({
  declarations: [AppComponent, ProductListComponent, HomeComponent, ProductComponent, ManageProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'manage', component: ManageProductsComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
