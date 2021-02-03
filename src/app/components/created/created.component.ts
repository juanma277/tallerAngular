import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Product } from "src/app/models/products.model";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-created",
  templateUrl: "./created.component.html",
  styleUrls: ["./created.component.css"],
})
export class CreatedComponent implements OnInit {
  form: FormGroup;
  showError: boolean;
  errorMessage: string;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    public productService: ProductsService,
    private router: Router
  ) {
    this.crearForm();
  }

  ngOnInit() {}

  crearForm() {
    this.form = this.fb.group({
      productName: ["", Validators.required],
      quantity: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  saveProduct() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }

    this.loading = true;

    const productCreated: Product = {
      productName: this.form.get("productName").value,
      quantity: this.form.get("quantity").value,
      description: this.form.get("description").value,
    };

    this.productService.createProduct(productCreated).subscribe(
      (data: any) => {
        this.loading = false;
        if (!data.process) {
          this.showError = true;
        } else {
          this.router.navigate(["/home"]);
        }
      },
      (error) => {
        this.loading = false;
        this.showError = true;
        this.errorMessage = error.message;
      }
    );
  }
}
