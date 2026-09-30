import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimelineClip {
  id: string;
  track: 'V3' | 'V2' | 'V1' | 'A1' | 'A2' | 'A3';
  title: string;
  color: string;
  durationSec: number;
  startSec: number;
  details: string;
  vfxTechnique: string;
}

@Component({
  selector: 'app-breakdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breakdown.html',
  styleUrl: './breakdown.css'
})
export class BreakdownComponent {
  selectedClip = signal<TimelineClip | null>({
    id: 'clip-1',
    track: 'V1',
    title: 'A-Roll Main Commercial Cut',
    color: '#007FFF',
    durationSec: 25,
    startSec: 0,
    details: 'Primary story footage cut with rhythmic speech edits. J-cuts and L-cuts to maintain natural conversational pacing.',
    vfxTechnique: 'Morph Cut transition + De-Noise 12dB'
  });

  clips: TimelineClip[] = [
    {
      id: 'clip-1',
      track: 'V1',
      title: 'A-Roll Main Commercial Cut',
      color: '#007FFF',
      durationSec: 25,
      startSec: 0,
      details: 'Primary story footage cut with rhythmic speech edits. J-cuts and L-cuts to maintain natural conversational pacing.',
      vfxTechnique: 'Morph Cut transition + De-Noise 12dB'
    },
    {
      id: 'clip-2',
      track: 'V2',
      title: 'B-Roll Drone Overhead',
      color: '#5B7BFB',
      durationSec: 10,
      startSec: 8,
      details: 'Slow-motion aerial establishing shot speed ramped down to 24fps with camera motion blur.',
      vfxTechnique: 'Optical Flow Speed Ramp (120fps -> 24fps)'
    },
    {
      id: 'clip-3',
      track: 'V3',
      title: '3D Callout Graphic HUD',
      color: '#FF4D54',
      durationSec: 8,
      startSec: 14,
      details: 'Keyframed After Effects 3D motion graphic pinned to moving subject via 3D camera tracking.',
      vfxTechnique: '3D Camera Tracker + Expression Rig'
    },
    {
      id: 'clip-4',
      track: 'A1',
      title: 'Dialogue Clean Master',
      color: '#2E7D32',
      durationSec: 25,
      startSec: 0,
      details: 'Voiceover isolation with spectral de-noising, multiband compression, and warm EQ curve.',
      vfxTechnique: 'iZotope RX Spectral De-noise + Parametric EQ'
    },
    {
      id: 'clip-5',
      track: 'A2',
      title: 'Cinematic Orchestral Track',
      color: '#F57F17',
      durationSec: 25,
      startSec: 0,
      details: 'Dynamic soundtrack audio ducking under dialogue peaks with sidechain compression.',
      vfxTechnique: 'Auto-Ducking Sidechain Compressor'
    },
    {
      id: 'clip-6',
      track: 'A3',
      title: 'Sound Design & SFX Whooshes',
      color: '#D81B60',
      durationSec: 15,
      startSec: 7,
      details: 'Layered sub-bass drops, mechanical clicks, and atmospheric risers aligned with visual cuts.',
      vfxTechnique: 'Custom SFX Stem Layering'
    }
  ];

  selectClip(clip: TimelineClip) {
    this.selectedClip.set(clip);
  }
}
