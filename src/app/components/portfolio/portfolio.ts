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

  visibleCount = signal<number>(6);

  projects = signal<ProjectItem[]>([
    {
      id: 'proj-1',
      title: 'Hockey India League',
      category: 'commercials',
      client: 'StudioFry | Dir: Devang Singh',
      image: 'Thumbnail/HOCKEY.png',
      duration: '',
      views: '2.5M',
      tags: ['Commercial', 'Editing', 'StudioFry'],
      description: 'Production House: StudioFry | Director: Devang Singh | Editor: Arun Chelani',
      videoUrl: 'Videos/Hockey India League_DC_Final CLEAN.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-2',
      title: 'Samsung x Prime Video',
      category: 'commercials',
      client: 'Collectiveart | Dir: Avnish K',
      image: 'Thumbnail/PV x Samsung.png',
      duration: '',
      views: '3.1M',
      tags: ['Commercial', 'Editing', 'Collectiveart'],
      description: 'Production House: Collectiveart | Director: Avnish K | Editor: Arun Chelani',
      videoUrl: 'Videos/PV X SAMSUNG D Cut.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-3',
      title: 'Mahindra XEV9S',
      category: 'commercials',
      client: '456 Studios | Dir: Llyod Bapista',
      image: 'Thumbnail/MAHINDRA XEV9S.png',
      duration: '',
      views: '4.8M',
      tags: ['Commercial', 'Editing', '456 Studios'],
      description: 'Production House: 456 Studios | Director: Llyod Bapista | Editor: Arun Chelani',
      videoUrl: 'Videos/Mahindra Master_EC.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-4',
      title: 'BRAVE Tabs',
      category: 'commercials',
      client: 'Newway Films | Dir: Vaishali Tuteja',
      image: 'Thumbnail/BRAVE.png',
      duration: '',
      views: '1.9M',
      tags: ['Commercial', 'Editing', 'Newway Films'],
      description: 'Production House: Newway Films | Director: Vaishali Tuteja | Editor: Arun Chelani',
      videoUrl: 'Videos/BRAVE_Master_16X9.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-5',
      title: 'IQOO 15R',
      category: 'commercials',
      client: 'Karmanline | Dir: Bhanu Babbal',
      image: 'Thumbnail/IQOO.png',
      duration: '',
      views: '5.4M',
      tags: ['Commercial', 'Editing', 'Karmanline'],
      description: 'Production House: Karmanline | Director: Bhanu Babbal | Editor: Arun Chelani',
      videoUrl: 'Videos/IQOO 15R FILM 02 D-CUT 250226.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-6',
      title: 'Realme P4 Power',
      category: 'commercials',
      client: 'Karmanline | Dir: Neal Massey',
      image: 'Thumbnail/REALME.png',
      duration: '',
      views: '6.2M',
      tags: ['Commercial', 'Editing', 'Karmanline'],
      description: 'Production House: Karmanline | Director: Neal Massey | Editor: Arun Chelani',
      videoUrl: 'Videos/REALME DCUT 220126.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-7',
      title: 'Mahindra 7XO',
      category: 'commercials',
      client: '456 Studios | Dir: Llyod Bapista',
      image: 'Thumbnail/7XO.png',
      duration: '',
      views: '5.1M',
      tags: ['Commercial', 'Editing', '456 Studios'],
      description: 'Production House: 456 Studios | Director: Llyod Bapista | Editor: Arun Chelani',
      videoUrl: 'Videos/Mahindra Master_EC.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-8',
      title: 'Pataal Lok Season 2 Teaser',
      category: 'commercials',
      client: 'Collectiveart | Dir: Sahil Shah',
      image: 'https://img.youtube.com/vi/XOyb3zpI8FI/hqdefault.jpg',
      duration: '01:30',
      views: '8.7M',
      tags: ['Teaser', 'Editing', 'Collectiveart'],
      description: 'Production House: Collectiveart | Director: Sahil Shah | Editor: Arun Chelani',
      videoUrl: 'https://www.youtube.com/embed/XOyb3zpI8FI',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-9',
      title: 'Nescafe Cold Coffee',
      category: 'commercials',
      client: 'StudioFry | Dir: Devang Singh',
      image: 'Thumbnail/NESCAFE COLD COFFEE.png',
      duration: '',
      views: '3.8M',
      tags: ['Commercial', 'Editing', 'StudioFry'],
      description: 'Production House: StudioFry | Director: Devang Singh | Editor: Arun Chelani',
      videoUrl: 'Videos/NESCAFE Film02 GIRL DCUT 30sec 100225.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-10',
      title: 'Blinkit x Kriti Sanon',
      category: 'commercials',
      client: 'Dhindora Media | Dir: Kamal Teja',
      image: 'Thumbnail/BLINKIT.png',
      duration: '',
      views: '8.1M',
      tags: ['Commercial', 'Editing', 'Dhindora Media'],
      description: 'Production House: Dhindora Media | Director: Kamal Teja | Editor: Arun Chelani',
      videoUrl: 'Videos/Blinkit x Hyphen_DC_High res.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-11',
      title: 'Mumbai Indians Anthem',
      category: 'commercials',
      client: 'StudioFry | Dir: Devang Singh',
      image: 'https://img.youtube.com/vi/wqGQIA5fYMY/hqdefault.jpg',
      duration: '02:14',
      views: '12.4M',
      tags: ['Anthem', 'Editing', 'StudioFry'],
      description: 'Production House: StudioFry | Director: Devang Singh | Editor: Arun Chelani',
      videoUrl: 'https://www.youtube.com/embed/wqGQIA5fYMY',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-12',
      title: 'Nescafe Classic',
      category: 'commercials',
      client: 'StudioFry | Dir: Devang Singh',
      image: 'Thumbnail/NESACAFE CLASSIC.png',
      duration: '00:30',
      views: '4.5M',
      tags: ['Commercial', 'Editing', 'StudioFry'],
      description: 'Production House: StudioFry | Director: Devang Singh | Editor: Arun Chelani',
      videoUrl: 'Videos/NESCAFE_ONLINE 1.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-13',
      title: 'Scapia Winter EP 5',
      category: 'commercials',
      client: 'StudioFry | Dir: Devang Singh',
      image: 'Thumbnail/SCAPIA EP 5.png',
      duration: '',
      views: '2.1M',
      tags: ['Commercial', 'Editing', 'StudioFry'],
      description: 'Production House: StudioFry | Director: Devang Singh | Editor: Arun Chelani',
      videoUrl: 'Videos/SCAPIA EP 5_DC_220225-001.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-14',
      title: 'Impact Mints x Ranveer Singh',
      category: 'commercials',
      client: 'StudioFry | Dir: Devang Singh',
      image: 'Thumbnail/IMPACT MINTS.png',
      duration: '',
      views: '9.3M',
      tags: ['Commercial', 'Editing', 'StudioFry'],
      description: 'Production House: StudioFry | Director: Devang Singh | Editor: Arun Chelani',
      videoUrl: 'Videos/Impact Mints x Ranveer Singh.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-15',
      title: 'Motorola x Rasha Thadani',
      category: 'commercials',
      client: 'Zulu Films | Dir: Llyod Bapista',
      image: 'Thumbnail/MOTO.png',
      duration: '01:15',
      views: '7.8M',
      tags: ['Commercial', 'Editing', 'Zulu Films'],
      description: 'Production House: Zulu Films | Director: Llyod Bapista | Editor: Arun Chelani',
      videoUrl: 'Videos/Motorola x Rasha Thadani.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-16',
      title: 'Aqualogica x Rebel Kid',
      category: 'commercials',
      client: 'Collectiveart | Dir: Neal Massey',
      image: 'Thumbnail/AQUALOGICA.png',
      duration: '',
      views: '4.2M',
      tags: ['Commercial', 'Editing', 'Collectiveart'],
      description: 'Production House: Collectiveart | Director: Neal Massey | Editor: Arun Chelani',
      videoUrl: 'Videos/Aqualogica x Rebel Kid.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-17',
      title: 'Mahina',
      category: 'commercials',
      client: 'StudioFry | Dir: Devang Singh',
      image: 'Thumbnail/MAHINA.png',
      duration: '',
      views: '1.6M',
      tags: ['Music Video', 'Editing', 'StudioFry'],
      description: 'Production House: StudioFry | Director: Devang Singh | Editor: Arun Chelani',
      videoUrl: 'Videos/Mahina.mp4',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-18',
      title: 'ONLY x Ananya Pandey',
      category: 'commercials',
      client: 'Yellow Elephant | Dir: Kirti',
      image: 'https://img.youtube.com/vi/TyBRUBeP_kE/hqdefault.jpg',
      duration: '00:30',
      views: '11.5M',
      tags: ['Commercial', 'Editing', 'Yellow Elephant'],
      description: 'Production House: Yellow Elephant | Director: Kirti | Editor: Arun Chelani',
      videoUrl: 'https://www.youtube.com/embed/TyBRUBeP_kE',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
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
