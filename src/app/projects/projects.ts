import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: string[] = [
    'Web Design',
    'Mobile Design',
    'LOGO Design',
    'WEB APPLICATION DEVELOMENT',
    'MOBILE APPLICATION DEVELOMENT',
    'PWA DEVELOMENT',
  ];
}
