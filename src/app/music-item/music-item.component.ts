import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Music } from '../models/music';

@Component({
  selector: 'app-music-item',
  standalone: true,
  imports: [],
  host: {
    'class': 'card'
  },
  templateUrl: './music-item.component.html',
  styleUrl: './music-item.component.css'
})
export class MusicItemComponent implements OnInit, OnChanges {
  @Input() music!: Music;
  @Input() index!: number;
  modalId: string = 'musicModal';

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.modalId += '' + this.index;
  }

  ngOnInit(): void {

    if (!this.music.audioSrc)
      return;

    const audio = new Audio(this.music.audioSrc);
    audio.volume = 0.05;
    const musicModal = this.el.nativeElement.querySelector('div.modal.fade');
    musicModal?.addEventListener('hidden.bs.modal', () => {
      console.log('closed');
      audio.pause();
    });
    musicModal?.addEventListener('shown.bs.modal', () => {
      console.log('open');
      audio.play();
    });
  }

}
