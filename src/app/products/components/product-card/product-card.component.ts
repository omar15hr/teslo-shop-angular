import { Product } from '@products/interfaces/product.interface';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';

@Component({
  selector: 'product-card',
  imports: [RouterLink, SlicePipe, ProductImagePipe],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  product = input.required<Product>();

  imageUrl = computed(() => {
    return `https://nest-teslo-shop-backend-6geb.onrender.com/api/files/product/${
      this.product().images[0]
    }`;
  });
}
