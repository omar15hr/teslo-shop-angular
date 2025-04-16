import { ProductsResponse } from '@products/interfaces/product.interface';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'product-card',
  imports: [RouterLink, SlicePipe],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  product = input.required<ProductsResponse>();
}
