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
      image: 'assets/images/placeholder_white.svg',
      duration: '',
      views: '2.5M',
      tags: ['Commercial', 'Editing', 'StudioFry'],
      description: 'Production House: StudioFry | Director: Devang Singh | Editor: Arun Chelani',
      videoUrl: 'https://drive.google.com/file/d/1iNh2QtI2lwucKcoLy4wbCMsfGvcM16tO/preview',
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
      image: 'assets/images/placeholder_white.svg',
      duration: '',
      views: '3.1M',
      tags: ['Commercial', 'Editing', 'Collectiveart'],
      description: 'Production House: Collectiveart | Director: Avnish K | Editor: Arun Chelani',
      videoUrl: 'https://drive.google.com/file/d/1Irk1vIT9nHYbSG0JxiNqM-AGBo1NxhFw/preview',
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
      image: 'assets/images/placeholder_white.svg',
      duration: '',
      views: '4.8M',
      tags: ['Commercial', 'Editing', '456 Studios'],
      description: 'Production House: 456 Studios | Director: Llyod Bapista | Editor: Arun Chelani',
      videoUrl: 'https://drive.google.com/file/d/1j7uER1_zcjpT6HWeVsHjLUU1XAm9LrxS/preview',
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
      image: 'assets/images/placeholder_white.svg',
      duration: '',
      views: '1.9M',
      tags: ['Commercial', 'Editing', 'Newway Films'],
      description: 'Production House: Newway Films | Director: Vaishali Tuteja | Editor: Arun Chelani',
      videoUrl: 'https://drive.google.com/file/d/12y4TVsC8sa14cAlwCpQQi7wd360NeRP6/preview',
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
      image: 'assets/images/placeholder_white.svg',
      duration: '',
      views: '5.4M',
      tags: ['Commercial', 'Editing', 'Karmanline'],
      description: 'Production House: Karmanline | Director: Bhanu Babbal | Editor: Arun Chelani',
      videoUrl: 'https://drive.google.com/file/d/1MnDQkOhMnYdVjZ35dI7clEv6vhUcpW_S/preview',
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
      image: 'assets/images/placeholder_white.svg',
      duration: '',
      views: '6.2M',
      tags: ['Commercial', 'Editing', 'Karmanline'],
      description: 'Production House: Karmanline | Director: Neal Massey | Editor: Arun Chelani',
      videoUrl: 'https://drive.google.com/file/d/1kxcOaytPB4tdwNiqZdMm3y2nhi6aBQYr/preview',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-7',
      title: 'Nescafe Cold Coffee',
      category: 'commercials',
      client: 'StudioFry | Dir: Devang Singh',
      image: 'assets/images/placeholder_white.svg',
      duration: '',
      views: '3.8M',
      tags: ['Commercial', 'Editing', 'StudioFry'],
      description: 'Production House: StudioFry | Director: Devang Singh | Editor: Arun Chelani',
      videoUrl: 'https://drive.google.com/file/d/1d2uIcrs5bYiIjtei0ViP1BYL7nkbygyF/preview',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-8',
      title: 'Blinkit x Kriti Sanon',
      category: 'commercials',
      client: 'Dhindora Media | Dir: Kamal Teja',
      image: 'assets/images/placeholder_white.svg',
      duration: '',
      views: '8.1M',
      tags: ['Commercial', 'Editing', 'Dhindora Media'],
      description: 'Production House: Dhindora Media | Director: Kamal Teja | Editor: Arun Chelani',
      videoUrl: 'https://drive.google.com/file/d/1YG7-PSaYMtqCPTRMYG6PHDoD3cgYW_eA/preview',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-9',
      title: 'Mumbai Indians Anthem',
      category: 'commercials',
      client: 'StudioFry | Dir: Devang Singh',
      image: 'assets/images/placeholder_white.svg',
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
      id: 'proj-10',
      title: 'Nescafe Classic',
      category: 'commercials',
      client: 'StudioFry | Dir: Devang Singh',
      image: 'assets/images/placeholder_white.svg',
      duration: '00:30',
      views: '4.5M',
      tags: ['Commercial', 'Editing', 'StudioFry'],
      description: 'Production House: StudioFry | Director: Devang Singh | Editor: Arun Chelani',
      videoUrl: 'https://drive.google.com/file/d/1ReVE2oY7LvM0jtTElmu2gG0Y-0GrJYDe/preview',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-11',
      title: 'Scapia Winter EP 5',
      category: 'commercials',
      client: 'StudioFry | Dir: Devang Singh',
      image: 'assets/images/placeholder_white.svg',
      duration: '',
      views: '2.1M',
      tags: ['Commercial', 'Editing', 'StudioFry'],
      description: 'Production House: StudioFry | Director: Devang Singh | Editor: Arun Chelani',
      videoUrl: 'https://drive.google.com/file/d/1Dip4VM3lt254ylgYYkd9kRifJzM_wM7D/preview',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-12',
      title: 'Impact Mints x Ranveer Singh',
      category: 'commercials',
      client: 'StudioFry | Dir: Devang Singh',
      image: 'assets/images/placeholder_white.svg',
      duration: '',
      views: '9.3M',
      tags: ['Commercial', 'Editing', 'StudioFry'],
      description: 'Production House: StudioFry | Director: Devang Singh | Editor: Arun Chelani',
      videoUrl: 'https://drive.google.com/file/d/1twwZU422o0oddh7se9Vy85aSFoMpl9TA/preview',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-13',
      title: 'Motorola x Rasha Thadani',
      category: 'commercials',
      client: 'Zulu Films | Dir: Llyod Bapista',
      image: 'assets/images/placeholder_white.svg',
      duration: '01:15',
      views: '7.8M',
      tags: ['Commercial', 'Editing', 'Zulu Films'],
      description: 'Production House: Zulu Films | Director: Llyod Bapista | Editor: Arun Chelani',
      videoUrl: 'https://drive.google.com/file/d/1gY5QShs-WkFkkR1OEx9jzGa52FWePwyb/preview',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-14',
      title: 'Aqualogica x Rebel Kid',
      category: 'commercials',
      client: 'Collectiveart | Dir: Neal Massey',
      image: 'assets/images/placeholder_white.svg',
      duration: '',
      views: '4.2M',
      tags: ['Commercial', 'Editing', 'Collectiveart'],
      description: 'Production House: Collectiveart | Director: Neal Massey | Editor: Arun Chelani',
      videoUrl: 'https://drive.google.com/file/d/1KH1Vsm9jd4yFTY-b2fLw_8ECBG265DzF/preview',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-15',
      title: 'Mahina',
      category: 'commercials',
      client: 'StudioFry | Dir: Devang Singh',
      image: 'assets/images/placeholder_white.svg',
      duration: '',
      views: '1.6M',
      tags: ['Music Video', 'Editing', 'StudioFry'],
      description: 'Production House: StudioFry | Director: Devang Singh | Editor: Arun Chelani',
      videoUrl: 'https://drive.google.com/file/d/1bj-DHALCM5nDvBeEJ5AH4w-7y8ZD2Y8H/preview',
      specs: {
        resolution: '4K DCI',
        fps: '24 fps',
        software: ['Premiere Pro', 'DaVinci Resolve'],
        turnaround: 'Master Cut'
      }
    },
    {
      id: 'proj-16',
      title: 'ONLY x Ananya Pandey',
      category: 'commercials',
      client: 'Yellow Elephant | Dir: Kirti',
      image: 'assets/images/placeholder_white.svg',
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
