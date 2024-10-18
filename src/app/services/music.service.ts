import { Injectable } from '@angular/core';
import data from '../data/music.json';
import { Music } from '../models/music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor() {}
  getList(): Music[] {
    return data;
  }
}
