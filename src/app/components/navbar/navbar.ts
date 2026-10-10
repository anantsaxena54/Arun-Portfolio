import { Component, input, computed, signal, HostListener } from '@angular/core';
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
  isScrolled = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    this.isScrolled.set(scrollY > 50);
  }

  rgbValues = computed(() => {
    const bg = this.bgColor();
    const match = bg.match(/\d+,\s*\d+,\s*\d+/);
    return match ? match[0] : '10, 10, 12';
  });
}
