import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  nav: string[] = ['hero', 'bio', 'skills', 'projects', 'footer'];
}
