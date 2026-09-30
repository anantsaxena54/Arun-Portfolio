import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class TestimonialsComponent {
  expertiseList = [
    'Brand Commercials',
    'Film Editing & Pacing',
    'DaVinci Color Grading',
    'Sound Design & Mixing',
    'Creative Supervision'
  ];

  brands = [
    { name: 'Starbucks', icon: 'fa-coffee' },
    { name: 'Hotstar', icon: 'fa-play' },
    { name: "Jimmy's Cocktails", icon: 'fa-glass-water' },
    { name: 'Real Activ', icon: 'fa-heart-pulse' },
    { name: 'Gigabyte', icon: 'fa-microchip' },
    { name: 'ICICI Bank', icon: 'fa-building-columns' },
    { name: 'Asian Paints', icon: 'fa-paint-roller' }
  ];
}
