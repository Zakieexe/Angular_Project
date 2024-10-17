import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css'
})
export class DummyComponent {
  dummyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with validators
    this.dummyForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.dummyForm.valid) {
      console.log('Form Submitted:', this.dummyForm.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
