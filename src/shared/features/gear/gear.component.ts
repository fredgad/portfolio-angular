import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageDirective } from '@shared/common/directives';
import { TrackByPropertyPipe } from '../../common/pipes/track-by-property.pipe';
import { GearImages, GearImagesI } from './constants';

@Component({
  selector: 'app-gear',
  standalone: true,
  imports: [CommonModule, BackgroundImageDirective, TrackByPropertyPipe],
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss'],
})
export class GearComponent implements OnInit {
  @Input() screen: number = 0;
  @Input() positionTop: string = 'calc(50vh - 5rem)';
  @Input() positionLeft: string = 'calc(50vw - 5rem)';

  public gearImages: GearImagesI[] = GearImages;

  constructor() {}

  ngOnInit(): void {}
}
