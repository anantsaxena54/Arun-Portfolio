import { Component, input, output, signal, computed, inject, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ProjectItem } from '../portfolio/portfolio';

@Component({
  selector: 'app-video-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-modal.html',
  styleUrl: './video-modal.css'
})
export class VideoModalComponent {
  project = input<ProjectItem | null>(null);
  closeModal = output<void>();

  private sanitizer = inject(DomSanitizer);

  @ViewChild('videoPlayer') set videoPlayerRef(ref: ElementRef<HTMLVideoElement> | undefined) {
    if (ref?.nativeElement) {
      ref.nativeElement.pause();
    }
  }

  @HostListener('window:keydown.escape')
  onEscapeKey() {
    if (this.project()) {
      this.onClose();
    }
  }

  // Auto-detect video type: 'vimeo' | 'youtube' | 'gdrive' | 'direct'
  videoType = computed<'vimeo' | 'youtube' | 'gdrive' | 'direct'>(() => {
    const url = this.project()?.videoUrl || '';
    if (url.includes('vimeo.com')) return 'vimeo';
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('drive.google.com')) return 'gdrive';
    return 'direct';
  });

  // Sanitized resource URL for Vimeo / YouTube / Google Drive iframe embeds (without autoplay)
  safeEmbedUrl = computed<SafeResourceUrl | null>(() => {
    const url = this.project()?.videoUrl || '';
    const type = this.videoType();

    if (type === 'gdrive') {
      const match = url.match(/\/file\/d\/([^\/]+)/);
      const fileId = match ? match[1] : '';
      const embedUrl = fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }

    if (type === 'vimeo') {
      const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
      const vimeoId = match ? match[1] : url.split('/').pop();
      const embedUrl = `https://player.vimeo.com/video/${vimeoId}?autoplay=0&autopause=0&title=0&byline=0&portrait=0`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }

    if (type === 'youtube') {
      let youtubeId = '';
      if (url.includes('youtu.be/')) {
        youtubeId = url.split('youtu.be/')[1]?.split('?')[0] || '';
      } else if (url.includes('v=')) {
        youtubeId = url.split('v=')[1]?.split('&')[0] || '';
      } else if (url.includes('/embed/')) {
        youtubeId = url.split('/embed/')[1]?.split('?')[0] || '';
      }
      const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=0&enablejsapi=1`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }

    return null;
  });

  onClose() {
    this.closeModal.emit();
  }
}
