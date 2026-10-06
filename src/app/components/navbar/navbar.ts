import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  bgColor = input<string>('rgb(10, 10, 12)');

  rgbValues = computed(() => {
    const bg = this.bgColor();
    const match = bg.match(/\d+,\s*\d+,\s*\d+/);
    return match ? match[0] : '10, 10, 12';
  });
}
