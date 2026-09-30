import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  isModalOpen = signal<boolean>(false);
  isSubmitted = signal<boolean>(false);

  formData = {
    name: '',
    email: '',
    projectType: 'Commercial',
    details: ''
  };

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onSubmit() {
    if (!this.formData.name || !this.formData.email) return;
    this.isSubmitted.set(true);
  }
}
