import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Product, ProductModel } from "../models/products.model";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  url = environment.backUrl;
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel> {
    const headers = new HttpHeaders({
      username: environment.username,
    });

    return this.http.get<ProductModel>(this.url + "/products", { headers });
  }

  createProduct(product: Product) {
    const headers = new HttpHeaders({
      username: environment.username,
    });
    return this.http.post(this.url + "/products", product, { headers });
  }

  activeOrInactive(id: string) {
    return this.http.delete(this.url + "/products/" + id);
  }
}
