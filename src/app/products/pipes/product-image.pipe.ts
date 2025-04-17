import { Pipe, PipeTransform } from "@angular/core";
import { environment } from "src/environments/environment";

const baseUrl = environment.baseUrl;

@Pipe({
  name: "productImage",
})
export class ProductImagePipe implements PipeTransform {
  transform(value: string | string[] | null | undefined): string {
    const placeholder = 'https://placehold.co/300x300?text=No+Image&font=montserrat&bold=true&text-color=888';

    if (!value) return placeholder;

    if (typeof value === 'string') {
      return value.trim() !== '' ? value : placeholder;
    }

    if (Array.isArray(value) && value.length > 0 && value[0].trim() !== '') {
      return value[0];
    }

    return placeholder;
  }
}