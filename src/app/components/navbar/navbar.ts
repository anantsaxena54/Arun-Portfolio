import { Component, ElementRef, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  private raf = 0;

  constructor(private zone: NgZone, private elRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    const el = this.elRef.nativeElement.querySelector('.navbar-header') as HTMLElement;
    const cursor = document.querySelector('.custom-blend-cursor') as HTMLElement;

    this.zone.runOutsideAngular(() => {
      const tick = () => {
        if (cursor && el) {
          const c = cursor.getBoundingClientRect();
          const h = el.getBoundingClientRect();
          el.style.setProperty('--x', `${c.left + c.width / 2 - h.left}px`);
          el.style.setProperty('--y', `${c.top + c.height / 2 - h.top}px`);
          el.style.setProperty('--r', `${c.width / 2}px`);
        }
        this.raf = requestAnimationFrame(tick);
      };
      tick();
    });
  }

  ngOnDestroy() {
    if (this.raf) {
      cancelAnimationFrame(this.raf);
    }
  }
}
