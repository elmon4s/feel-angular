import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicCollectionComponent } from './music-collection.component';

describe('MusicCollectionComponent', () => {
  let component: MusicCollectionComponent;
  let fixture: ComponentFixture<MusicCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
