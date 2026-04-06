import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private router = inject(Router);

  logout() {
    localStorage.removeItem('access');
    sessionStorage.removeItem('access');
    // Navegación interna de Angular
    this.router.navigate(['/login']);
  }
}
