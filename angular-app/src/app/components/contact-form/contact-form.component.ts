import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title text-center mb-4">Contact Us</h2>

              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
                <!-- Name Field -->
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    formControlName="name"
                    [ngClass]="{'is-invalid': submitted && contactForm.get('name')?.errors}"
                  >
                  <div class="invalid-feedback" *ngIf="submitted && contactForm.get('name')?.errors?.['required']">
                    Name is required
                  </div>
                </div>

                <!-- Email Field -->
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    formControlName="email"
                    [ngClass]="{'is-invalid': submitted && contactForm.get('email')?.errors}"
                  >
                  <div class="invalid-feedback" *ngIf="submitted && contactForm.get('email')?.errors?.['required']">
                    Email is required
                  </div>
                  <div class="invalid-feedback" *ngIf="submitted && contactForm.get('email')?.errors?.['email']">
                    Please enter a valid email
                  </div>
                </div>

                <!-- Message Field -->
                <div class="mb-3">
                  <label for="message" class="form-label">Message</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="4"
                    formControlName="message"
                    [ngClass]="{'is-invalid': submitted && contactForm.get('message')?.errors}"
                  ></textarea>
                  <div class="invalid-feedback" *ngIf="submitted && contactForm.get('message')?.errors?.['required']">
                    Message is required
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary" [disabled]="isLoading">
                    <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    {{ isLoading ? 'Submitting...' : 'Submit' }}
                  </button>
                </div>

                <!-- Success Message -->
                <div *ngIf="success" class="alert alert-success mt-3">
                  Thank you for your message! We'll get back to you soon.
                </div>

                <!-- Error Message -->
                <div *ngIf="error" class="alert alert-danger mt-3">
                  {{ error }}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .form-label {
      font-weight: 500;
    }
  `]
})
export class ContactFormComponent {
  contactForm: FormGroup;
  submitted = false;
  isLoading = false;
  success = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.error = '';
    this.success = false;

    if (this.contactForm.valid) {
      this.isLoading = true;
      this.contactService.submitContactForm(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Form submitted successfully:', response);
          this.isLoading = false;
          this.success = true;
          this.contactForm.reset();
          this.submitted = false;
        },
        error: (error: Error) => {
          console.error('Form submission error:', error);
          this.isLoading = false;
          this.error = error.message || 'Failed to submit form. Please try again.';
        }
      });
    }
  }
}
