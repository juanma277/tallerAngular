import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product, ProductModel } from "src/app/models/products.model";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  loading: boolean;
  totalData: number;

  constructor(public productService: ProductsService, private router: Router) {
    this.loadProducts();
  }

  ngOnInit() {}

  loadProducts() {
    this.loading = true;
    this.productService.getProducts().subscribe((data: ProductModel) => {
      this.products = data.products;
      this.totalData = data.products.length;
      this.loading = false;
    });
  }

  activeOrInactive(product: Product) {
    this.productService.activeOrInactive(product._id).subscribe((data) => {
      this.loadProducts();
    });
  }

  editProduct(product: Product) {
    this.router.navigate(["edit", product._id]);
  }
}
