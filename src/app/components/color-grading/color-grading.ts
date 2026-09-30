import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-grading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-grading.html',
  styleUrl: './color-grading.css'
})
export class ColorGradingComponent {
  sliderPosition = signal<number>(50);
  activePreset = signal<'commercial' | 'music' | 'documentary'>('commercial');

  presets = {
    commercial: {
      title: 'Commercial Luxury Grade',
      rawLabel: 'ARRI LOG-C3 (Flat Ungraded)',
      gradedLabel: 'Rec.709 Film Emulation (Teal & Warm Gold)',
      nodeInfo: '3-Way Color Wheels • Halation 35mm • Shadow Lift 2%'
    },
    music: {
      title: 'Cyberpunk Neon Grade',
      rawLabel: 'RED IPP2 RAW (Flat)',
      gradedLabel: 'Custom Neon Magenta & Deep Cyan Tint',
      nodeInfo: 'Hue vs Hue Curves • Glow FX Node • Anamorphic Flaring'
    },
    documentary: {
      title: 'Natural Skin Tone & Narrative Grade',
      rawLabel: 'Sony S-Log3 (Flat)',
      gradedLabel: 'Natural Kodak 2393 Print LUT',
      nodeInfo: 'Skin Qualifier Isolation • D55 White Balance • Contrast Curve'
    }
  };

  onSliderInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.sliderPosition.set(Number(input.value));
  }

  setPreset(key: 'commercial' | 'music' | 'documentary') {
    this.activePreset.set(key);
  }
}
