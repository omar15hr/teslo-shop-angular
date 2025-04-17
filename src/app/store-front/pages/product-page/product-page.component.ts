import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);

  productId: number = this.activatedRoute.snapshot.params['id'];

  productResource = rxResource({
    request: () => ({ id: this.productId }),
    loader: ({ request }) => {
      return this.productService.getProductById(request.id);
    },
  });
}
