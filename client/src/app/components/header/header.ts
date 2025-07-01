import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, FormsModule, RouterLink, RouterLinkActive ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  
  is_fullscreen = false;
  is_dark_mode = false;
  search = '';


  constructor(private router : Router) {}

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

  searchMovie(){
    if (this.search.trim() !== '') {
      this.router.navigate(['search'], { queryParams: { query: this.search } });
      this.search = '';
    } else {
      console.warn('Search query is empty');
    }
  }
}
