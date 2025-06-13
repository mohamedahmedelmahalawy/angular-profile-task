import { Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  imports: [],
  templateUrl: './bio.html',
  styleUrl: './bio.scss',
})
export class Bio {
  name: string = 'Mohamed ElMahalawy';
  desc: string = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora
        architecto et iusto, id non temporibus doloremque possimus neque eum,
        voluptatem molestiae cupiditate quia quos corrupti maxime deserunt
        obcaecati ad quibusdam! Tempora
        architecto et iusto, id non temporibus doloremque possimus neque eum,
        voluptatem molestiae cupiditate quia quos corrupti maxime deserunt
        obcaecati ad quibusdam!`;
}
