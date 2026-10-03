import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  isHovered = signal<boolean>(false);
  isClicked = signal<boolean>(false);
  showSuccess = signal<boolean>(false);
  isButtonHovered = signal<boolean>(false);

  handleClick(event: Event) {
    event.preventDefault();
    this.isClicked.set(true);

    setTimeout(() => {
      this.showSuccess.set(true);
    }, 500);
  }

  handleSendMessage() {
    window.open("https://wa.me/917477294570?text=Hi%20Arun,%20I'd%20like%20to%20discuss%20a%20video%20editing%20project!", '_blank');
  }

  setHover(state: boolean) {
    this.isHovered.set(state);
  }

  setButtonHover(state: boolean) {
    this.isButtonHovered.set(state);
  }
}

