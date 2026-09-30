import { Component, signal, computed, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  image: string;
  duration: string;
  views: string;
  tags: string[];
  description: string;
  videoUrl: string;
  specs: {
    resolution: string;
    fps: string;
    software: string[];
    turnaround: string;
  };
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class PortfolioComponent {
  selectProject = output<ProjectItem>();

  visibleCount = signal<number>(4);

  projects = signal<ProjectItem[]>([
    {
      id: 'proj-1',
      title: 'Velocity GT — Porsche Commercial',
      category: 'commercials',
      client: 'Porsche / Horizon Agency',
      image: 'assets/images/placeholder_white.svg',
      duration: '00:45',
      views: '1.8M',
      tags: ['4K Anamorphic', 'Speed Ramping', 'Sound Design'],
      description: 'High-octane commercial edit utilizing rhythm-matched sound design, custom speed ramps, and deep teal-red color grade.',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      specs: {
        resolution: '4K DCI Anamorphic 2.39:1',
        fps: '24fps / 120fps Slow-mo',
        software: ['DaVinci Resolve Studio', 'Premiere Pro', 'iZotope RX'],
        turnaround: '3 Days'
      }
    },
    {
      id: 'proj-2',
      title: 'IndusInd Bank — Doorstep Banking Commercial',
      category: 'commercials',
      client: 'IndusInd Bank / Romp Productions',
      image: 'assets/images/placeholder_white.svg',
      duration: '01:15',
      views: '5.2M',
      tags: ['Narrative Cut', 'Color Grading', 'Dialogue Mix'],
      description: 'Heartwarming commercial edit focusing on character expressions, delicate audio transitions, and warm Kodak film color print.',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: '4 Days'
      }
    },
    {
      id: 'proj-3',
      title: 'Neon City Beats — Cyberpunk Music Video',
      category: 'music',
      client: 'Sony Music / Apex Records',
      image: 'assets/images/placeholder_white.svg',
      duration: '03:20',
      views: '14.2M',
      tags: ['VFX Glitch', 'Frame Blending', 'Light Leaks'],
      description: 'Stylized music video edit with sync-to-beat frame pulses, glitch transitions, and heavy neon split-tone color grade.',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      specs: {
        resolution: '4K UHD',
        fps: '23.976 fps',
        software: ['After Effects', 'Premiere Pro', 'Sapphire VFX'],
        turnaround: '5 Days'
      }
    },
    {
      id: 'proj-4',
      title: 'BGMI Cylinder Man — High Action Commercial',
      category: 'commercials',
      client: 'Krafton / Esports India',
      image: 'assets/images/placeholder_white.svg',
      duration: '02:10',
      views: '8.9M',
      tags: ['Esports', 'VFX Compositing', 'Fast Pacing'],
      description: 'Fast-paced gaming commercial cut with heavy visual sound design, 3D camera tracking, and custom title graphics.',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      specs: {
        resolution: '4K UHD',
        fps: '60 fps',
        software: ['Premiere Pro', 'After Effects', 'Blender'],
        turnaround: '3 Days'
      }
    },
    {
      id: 'proj-5',
      title: 'Red Bull High-Altitude Flight — Thrill Campaign',
      category: 'commercials',
      client: 'Red Bull Media House',
      image: 'assets/images/placeholder_white.svg',
      duration: '01:30',
      views: '3.4M',
      tags: ['Extreme Sports', 'High FPS', 'Sound Design'],
      description: 'Action-packed flight commercial with rapid multi-cam sync, wind noise cancellation, and high-impact sound design.',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '120 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: '3 Days'
      }
    },
    {
      id: 'proj-6',
      title: 'Nike Mercurial — Speed Ramping Spot',
      category: 'commercials',
      client: 'Nike / Wieden+Kennedy',
      image: 'assets/images/placeholder_white.svg',
      duration: '00:60',
      views: '11.8M',
      tags: ['Athletic Cut', 'Rhythm Edit', 'Teal & Orange'],
      description: 'Dynamic sports edit featuring speed ramp transitions, optical flow frame rate conversion, and deep contrast color grading.',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '60 fps',
        software: ['DaVinci Resolve', 'After Effects'],
        turnaround: '2 Days'
      }
    },
    {
      id: 'proj-7',
      title: 'Tech Essay 01 — AI Future Documentary',
      category: 'youtube',
      client: 'Veritas Media (2M Subs)',
      image: 'assets/images/placeholder_white.svg',
      duration: '15:20',
      views: '6.7M',
      tags: ['64% Retention', 'HUD Graphics', 'Documentary'],
      description: 'High-retention tech essay video with custom 3D callouts, animated kinetic captions, and seamless audio ducking.',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      specs: {
        resolution: '4K UHD',
        fps: '30 fps',
        software: ['Premiere Pro', 'After Effects'],
        turnaround: '4 Days'
      }
    },
    {
      id: 'proj-8',
      title: 'Cyberpunk Spec Reel 2026 — Motion VFX Cut',
      category: 'vfx',
      client: 'CyberTech Studios',
      image: 'assets/images/placeholder_white.svg',
      duration: '01:15',
      views: '950K',
      tags: ['3D Tracking', 'Element 3D', 'Sound FX'],
      description: 'Futuristic VFX showreel cut incorporating 3D element compositing, glowing UI HUDs, and deep electronic sound design.',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['After Effects', 'Blender', 'Resolve'],
        turnaround: '3 Days'
      }
    }
  ]);

  visibleProjects = computed(() => {
    return this.projects().slice(0, this.visibleCount());
  });

  hasMoreProjects = computed(() => {
    return this.visibleCount() < this.projects().length;
  });

  loadMore() {
    this.visibleCount.update(count => count + 4);
  }

  onProjectClick(project: ProjectItem) {
    this.selectProject.emit(project);
  }
}
