import { Component, input, output, signal, computed, inject } from '@angular/core';
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

  // Auto-detect video type: 'vimeo' | 'youtube' | 'direct'
  videoType = computed<'vimeo' | 'youtube' | 'direct'>(() => {
    const url = this.project()?.videoUrl || '';
    if (url.includes('vimeo.com')) return 'vimeo';
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    return 'direct';
  });

  // Sanitized resource URL for Vimeo / YouTube iframe embeds
  safeEmbedUrl = computed<SafeResourceUrl | null>(() => {
    const url = this.project()?.videoUrl || '';
    const type = this.videoType();

    if (type === 'vimeo') {
      const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
      const vimeoId = match ? match[1] : url.split('/').pop();
      const embedUrl = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }

    if (type === 'youtube') {
      let youtubeId = '';
      if (url.includes('youtu.be/')) {
        youtubeId = url.split('youtu.be/')[1]?.split('?')[0] || '';
      } else if (url.includes('v=')) {
        youtubeId = url.split('v=')[1]?.split('&')[0] || '';
      }
      const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }

    return null;
  });

  onClose() {
    this.closeModal.emit();
  }
}
