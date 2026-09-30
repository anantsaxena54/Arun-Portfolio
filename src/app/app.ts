import { Component, HostListener, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
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
    NavbarComponent,
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
export class App {
  scrollProgress = signal<number>(0);
  activeModalProject = signal<ProjectItem | null>(null);

  // Dynamic global page background color interpolating Red (168, 26, 32) -> Black (10, 10, 12)
  globalBgColor = computed(() => {
    const p = this.scrollProgress();
    const r = Math.round(168 - (168 - 10) * p);
    const g = Math.round(26 - (26 - 10) * p);
    const b = Math.round(32 - (32 - 12) * p);
    return `rgb(${r}, ${g}, ${b})`;
  });

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    // Smooth background color interpolation over 75% of viewport scroll height
    const progress = Math.min(1, Math.max(0, scrollY / (windowHeight * 0.75)));
    this.scrollProgress.set(progress);
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
