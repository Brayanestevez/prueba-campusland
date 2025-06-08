import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule], 
  templateUrl: './product-form.html',
})
export class ProductFormComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  productId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0.01)]],
      category: [''],
      available: ['Disponible'],
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.productId = +id;
      const product = this.service.getProduct(this.productId);
      if (product) this.form.patchValue(product);
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    if (this.isEdit) {
      this.service.updateProduct(this.productId, this.form.value);
    } else {
      this.service.addProduct(this.form.value);
    }

    this.router.navigate(['/products']);
  }
}
