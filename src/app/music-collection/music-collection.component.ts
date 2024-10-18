import { Component, inject, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { Music } from '../models/music';
import { MusicItemComponent } from "../music-item/music-item.component";

const MAX_COLUMNS = 3;

@Component({
  selector: 'app-music-collection',
  standalone: true,
  imports: [MusicItemComponent],
  templateUrl: './music-collection.component.html',
  styleUrl: './music-collection.component.css'
})
export class MusicCollectionComponent {
  musicService = inject(MusicService);
  musicList: Music[] = this.musicService.getList();
  
  range(index: number): Array<number> {
    return new Array(index).fill(0).map((n, i) => i + 1);
  }

  getRowsNumber(): number {
    let rowsNumber = Math.ceil(this.musicList.length / MAX_COLUMNS);
    return rowsNumber;
  }

  getRowItems(rowNumber: number): Music[] {
    let minIndex = (rowNumber - 1) * MAX_COLUMNS;
    let maxIndex = rowNumber * MAX_COLUMNS;
    return this.musicList.slice(minIndex, maxIndex);
  }
}