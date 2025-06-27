import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  
  @Output('toggleSidenav') toggleSidenav= new EventEmitter<void>();

  is_fullscreen = false;
  is_dark_mode = false;

  constructor() {}

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    this.is_fullscreen = !this.is_fullscreen;
  }

  toggleDarkMode() {
    this.is_dark_mode = !this.is_dark_mode;
    document.body.classList.toggle('dark-mode', this.is_dark_mode);
  }
}
