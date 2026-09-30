import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItem } from '../portfolio/portfolio';

@Component({
  selector: 'app-video-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-modal.html',
  styleUrl: './video-modal.css'
})
export class VideoModalComponent {
  project = input<ProjectItem | null>(null);
  closeModal = output<void>();
  activeTab = signal<'overview' | 'specs' | 'timeline'>('overview');

  onClose() {
    this.closeModal.emit();
  }
}
