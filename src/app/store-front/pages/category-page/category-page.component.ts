import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { map } from 'rxjs';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';

@Component({
  selector: 'app-category-page',
  imports: [ProductCardComponent],
  templateUrl: './category-page.component.html',
})
export class CategoryPageComponent {
  route = inject(ActivatedRoute);
  productsService = inject(ProductsService);

  category = toSignal(this.route.params.pipe(map(({ category }) => category)));

  productsResource = rxResource({
    request: () => ({ category: this.category() }),
    loader: ({ request }) => {
      return this.productsService.getProductsByCategory(request.category);
    },
  });
}
