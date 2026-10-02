import { Component, ElementRef, ViewChild, NgZone, AfterViewInit, OnDestroy, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('hero', { static: true }) hero!: ElementRef<HTMLElement>;
  playReel = output<void>();

  private raf = 0;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    const el = this.hero.nativeElement;
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

  onPlayReel() {
    this.playReel.emit();
  }
}
