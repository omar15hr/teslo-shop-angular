import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductsResponse } from '@products/interfaces/product.interface';
import { Observable, tap } from 'rxjs';

const baseUrl = environment.baseUrl;

interface Options {
  limit?: number;
  category?: string;
  page?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);

  getProducts(options: Options): Observable<ProductsResponse[]> {
    const { limit = 9, page = 1, category = '' } = options;

    return this.http
      .get<ProductsResponse[]>(`${baseUrl}/products`, {
        params: {
          limit,
          page,
          category,
        },
      })
      .pipe(tap());
  }

  getProductById(id: number): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(`${baseUrl}/products/${id}`)
  }
}
