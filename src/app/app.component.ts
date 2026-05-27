import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chikals-cooling-systems';
  menuOpen = false;
  modalOpen = false;
 
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
 
  closeMenu(): void {
    this.menuOpen = false;
  }
 
  openModal(): void {
    this.modalOpen = true;
  }
 
  closeModal(): void {
    this.modalOpen = false;
  }
}
