import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  padding: string = 'py-2';
  @HostListener('window:scroll')
  scrolled() {
    if (window.scrollY > 30) {
      this.padding = 'py-1';
    } else {
      this.padding = 'py-2';
    }
  }
}
