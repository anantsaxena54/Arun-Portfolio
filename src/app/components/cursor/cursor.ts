import { Component, ElementRef, NgZone, OnDestroy, afterNextRender, inject, viewChild } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `<div #disc class="custom-blend-cursor"></div>`,
  styleUrl: './cursor.css',
})
export class CursorComponent implements OnDestroy {
  private zone = inject(NgZone);
  private disc = viewChild.required<ElementRef<HTMLElement>>('disc');

  private raf = 0;
  private off: Array<() => void> = [];

  constructor() {
    afterNextRender(() => {
      if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;

      const el = this.disc().nativeElement;
      const target = { x: -100, y: -100, s: 0 };
      const cur = { x: -100, y: -100, s: 0 };
      let hovering = false;
      let pressed = false;

      const on = <K extends keyof DocumentEventMap>(type: K, fn: (e: DocumentEventMap[K]) => void) => {
        document.addEventListener(type, fn as EventListener, { passive: true });
        this.off.push(() => document.removeEventListener(type, fn as EventListener));
      };

      const scale = () => (pressed ? 0.8 : hovering ? 2 : 1);

      this.zone.runOutsideAngular(() => {
        on('pointermove', (e) => {
          if (e.pointerType !== 'mouse') return;
          if (target.s === 0) {
            cur.x = e.clientX;
            cur.y = e.clientY;
          }
          target.x = e.clientX;
          target.y = e.clientY;
          target.s = scale();
        });
        on('pointerover', (e) => {
          hovering = !!(e.target as Element | null)?.closest(
            'a, button, [role="button"], h1, h2, h3, .video-item-card, [data-cursor="grow"]'
          );
          if (target.s) target.s = scale();
        });
        on('pointerdown', () => {
          pressed = true;
          if (target.s) target.s = scale();
        });
        on('pointerup', () => {
          pressed = false;
          if (target.s) target.s = scale();
        });
        document.documentElement.addEventListener('mouseleave', () => (target.s = 0));
        document.documentElement.addEventListener('mouseenter', () => (target.s = scale()));

        const tick = () => {
          cur.x += (target.x - cur.x) * 0.2;
          cur.y += (target.y - cur.y) * 0.2;
          cur.s += (target.s - cur.s) * 0.2;
          el.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0) translate(-50%, -50%) scale(${cur.s})`;
          this.raf = requestAnimationFrame(tick);
        };
        tick();
      });
    });
  }

  ngOnDestroy() {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.off.forEach((fn) => fn());
  }
}
