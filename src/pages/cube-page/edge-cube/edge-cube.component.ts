import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CubeColorsI,
  CubePositionI,
  GenericKeyStringObject,
} from '@interfaces';
import { TrackByPropertyPipe } from '../../../shared/common/pipes/track-by-property.pipe';
import { CubeColors } from '../store/cube.constants';

@Component({
  selector: 'app-edge-cube',
  standalone: true,
  imports: [CommonModule, TrackByPropertyPipe],
  templateUrl: './edge-cube.component.html',
  styleUrls: ['./edge-cube.component.scss'],
})
export class EdgeCubeComponent implements OnInit {
  @Input() public classInput: string = '';

  public cubeColors: CubeColorsI = {
    top: '',
    front: '',
    right: '',
    bot: '',
    back: '',
    left: '',
  };

  public ngOnInit(): void {
    this.cubeColors = CubeColors[this.classInput];
  }

  public trackByFn(_: number, item: { key: string; value: string }): string {
    return item.key;
  }
}
