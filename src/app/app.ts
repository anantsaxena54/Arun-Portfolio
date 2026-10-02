import { Component, HostListener, signal, computed, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { PortfolioComponent, ProjectItem } from './components/portfolio/portfolio';
import { VideoModalComponent } from './components/video-modal/video-modal';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { CursorComponent } from './components/cursor/cursor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    PortfolioComponent,
    VideoModalComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    CursorComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  scrollProgress = signal<number>(0);
  overallScrollProgress = signal<number>(0);
  activeModalProject = signal<ProjectItem | null>(null);

  activeSection = signal<'hero' | 'portfolio' | 'about' | 'contact'>('hero');
  aboutFadeP = signal<number>(0);   // 0 = Black, 1 = Red
  contactFadeP = signal<number>(0); // 0 = Red, 1 = Black

  // Dynamic global page background color:
  // - Hero: Red -> Black fade
  // - Portfolio: 100% Solid Black (zero red at end of portfolio)
  // - About Me: Fades to Red as About Me enters, stays Solid Red
  // - Contact & Footer: Fades to Black as Contact enters, stays Solid Black
  globalBgColor = computed(() => {
    const sec = this.activeSection();
    const heroP = this.scrollProgress();
    const aboutP = this.aboutFadeP();
    const contactP = this.contactFadeP();

    let factor = 1; // 0 = Red (168, 26, 32), 1 = Black (10, 10, 12)

    if (sec === 'hero') {
      factor = heroP; // 0 (Red) -> 1 (Black)
    } else if (sec === 'portfolio') {
      factor = 1; // 100% SOLID BLACK
    } else if (sec === 'about') {
      factor = 1 - aboutP; // 1 (Black) -> 0 (Red)
    } else if (sec === 'contact') {
      factor = contactP; // 0 (Red) -> 1 (Black)
    }

    const r = Math.round(168 - (168 - 10) * factor);
    const g = Math.round(26 - (26 - 10) * factor);
    const b = Math.round(32 - (32 - 12) * factor);
    return `rgb(${r}, ${g}, ${b})`;
  });

  private observer: IntersectionObserver | null = null;
  private mutationObserver: MutationObserver | null = null;

  ngAfterViewInit() {
    this.initScrollObserver();
  }

  private initScrollObserver() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
      );

      const observeElements = () => {
        document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach((el) => {
          this.observer?.observe(el);
        });
      };

      observeElements();

      if ('MutationObserver' in window) {
        this.mutationObserver = new MutationObserver(() => {
          observeElements();
        });
        this.mutationObserver.observe(document.body, { childList: true, subtree: true });
      }
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const maxScroll = Math.max(1, (document.documentElement.scrollHeight || document.body.scrollHeight) - windowHeight);
    
    const overall = Math.min(1, Math.max(0, scrollY / maxScroll));
    this.overallScrollProgress.set(overall);

    const heroProgress = Math.min(1, Math.max(0, scrollY / (windowHeight * 0.75)));
    this.scrollProgress.set(heroProgress);

    document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
    document.documentElement.style.setProperty('--hero-scroll-p', `${heroProgress}`);
    document.documentElement.style.setProperty('--overall-scroll-p', `${overall}`);

    // DOM Bounding Box Section Detection for Exact Zero-Bleed Colors
    const heroEl = document.querySelector('.hero-section');
    const aboutEl = document.querySelector('.about-section');
    const contactEl = document.querySelector('.contact-section');

    const heroBottom = heroEl ? heroEl.getBoundingClientRect().bottom : 0;
    const aboutTop = aboutEl ? aboutEl.getBoundingClientRect().top : 99999;
    const contactTop = contactEl ? contactEl.getBoundingClientRect().top : 99999;

    if (contactTop <= windowHeight) {
      // Contact Me section is entering or active -> Fade to Black
      this.activeSection.set('contact');
      const fadeDist = windowHeight * 0.6;
      const p = Math.min(1, Math.max(0, (windowHeight - contactTop) / fadeDist));
      this.contactFadeP.set(p);
    } else if (aboutTop <= windowHeight) {
      // About Me section is entering or active -> Fade to Red
      this.activeSection.set('about');
      const fadeDist = windowHeight * 0.6;
      const p = Math.min(1, Math.max(0, (windowHeight - aboutTop) / fadeDist));
      this.aboutFadeP.set(p);
    } else if (heroBottom > 0) {
      // Hero section -> Red fading out
      this.activeSection.set('hero');
    } else {
      // Portfolio section -> 100% SOLID BLACK
      this.activeSection.set('portfolio');
    }
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
