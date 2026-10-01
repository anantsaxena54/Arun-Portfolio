import { Component, HostListener, signal, computed, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero';
import { PortfolioComponent, ProjectItem } from './components/portfolio/portfolio';
import { VideoModalComponent } from './components/video-modal/video-modal';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    PortfolioComponent,
    VideoModalComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('cursorRef') cursorRef!: ElementRef<HTMLDivElement>;

  size = 60;
  visible = signal<boolean>(false);
  isHovered = signal<boolean>(false);
  scrollProgress = signal<number>(0);
  activeModalProject = signal<ProjectItem | null>(null);

  private previousPos = { x: -60, y: -60 };
  private position = { x: -60, y: -60 };
  private requestRef: number | null = null;

  // Dynamic global page background color interpolating Red (168, 26, 32) -> Black (10, 10, 12)
  globalBgColor = computed(() => {
    const p = this.scrollProgress();
    const pFast = Math.min(1, p * 2.2);
    const r = Math.round(168 - (168 - 10) * pFast);
    const g = Math.round(26 - (26 - 10) * pFast);
    const b = Math.round(32 - (32 - 12) * pFast);
    return `rgb(${r}, ${g}, ${b})`;
  });

  private animate = () => {
    if (this.cursorRef?.nativeElement) {
      const currentX = this.previousPos.x;
      const currentY = this.previousPos.y;
      const targetSize = this.isHovered() ? 90 : 40;
      const targetX = this.position.x - targetSize / 2;
      const targetY = this.position.y - targetSize / 2;

      const deltaX = (targetX - currentX) * 0.2;
      const deltaY = (targetY - currentY) * 0.2;

      const newX = currentX + deltaX;
      const newY = currentY + deltaY;

      this.previousPos = { x: newX, y: newY };
      this.cursorRef.nativeElement.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    }

    this.requestRef = requestAnimationFrame(this.animate);
  };

  ngAfterViewInit() {
    this.requestRef = requestAnimationFrame(this.animate);
  }

  ngOnDestroy() {
    if (this.requestRef) {
      cancelAnimationFrame(this.requestRef);
    }
  }

  isHeroHovered = signal<boolean>(true);

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.visible.set(true);
    this.position = { x: e.clientX, y: e.clientY };
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);

    const heroEl = document.querySelector('.hero-section');
    if (heroEl) {
      const rect = heroEl.getBoundingClientRect();
      const inHero = e.clientY >= rect.top && e.clientY <= rect.bottom;
      this.isHeroHovered.set(inHero);
    }
  }

  @HostListener('document:mouseover', ['$event'])
  onMouseOver(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target) {
      const isInteractive = !!(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'H1' ||
        target.tagName === 'H2' ||
        target.tagName === 'H3' ||
        target.tagName === 'SPAN' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.video-item-card') ||
        target.closest('.hero-giant-title')
      );
      this.isHovered.set(isInteractive);
    }
  }

  @HostListener('document:mouseenter')
  onMouseEnter() {
    this.visible.set(true);
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    this.visible.set(false);
  }

  overallScrollProgress = signal<number>(0);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const maxScroll = Math.max(1, (document.documentElement.scrollHeight || document.body.scrollHeight) - windowHeight);
    
    const overall = Math.min(1, Math.max(0, scrollY / maxScroll));
    this.overallScrollProgress.set(overall);

    const heroProgress = Math.min(1, Math.max(0, scrollY / (windowHeight * 0.75)));
    this.scrollProgress.set(heroProgress);
  }

  showReelProject: ProjectItem = {
    id: 'showreel-2026',
    title: 'ARUN EDITORIAL — 2026 MASTER REEL',
    category: 'commercials',
    client: 'Arun Editorial Studio',
    image: 'assets/images/hero_editing_suite.jpg',
    duration: '01:45',
    views: '250K+',
    tags: ['4K DCI', 'Speed Ramps', 'Color Grading', 'Sound Design'],
    description: 'The 2026 Master Editorial Showreel showcasing high-impact commercial cuts, music videos, 3D motion graphics, and color grading.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    specs: {
      resolution: '4K DCI Anamorphic',
      fps: '23.976 / 60 / 120 fps',
      software: ['DaVinci Resolve Studio', 'Premiere Pro', 'After Effects'],
      turnaround: 'Master Cut'
    }
  };

  openShowreelModal() {
    this.activeModalProject.set(this.showReelProject);
  }

  openProjectModal(project: ProjectItem) {
    this.activeModalProject.set(project);
  }

  closeModal() {
    this.activeModalProject.set(null);
  }
}
