import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicCollectionComponent } from "./music-collection/music-collection.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MusicCollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'feel';
}
