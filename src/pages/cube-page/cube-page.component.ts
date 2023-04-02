import { Component, OnInit } from '@angular/core';
import { CommonModule, KeyValue } from '@angular/common';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CubeFacade } from './store/cube.facade';
import { EdgeCubeComponent } from './edge-cube/edge-cube.component';
import { CubePositionI, GenericKeyStringObject } from '@interfaces';
import { TrackByPropertyPipe } from '../../shared/common/pipes/track-by-property.pipe';

@Component({
  selector: 'app-cube-page',
  standalone: true,
  imports: [CommonModule, EdgeCubeComponent, TrackByPropertyPipe],
  templateUrl: './cube-page.component.html',
  styleUrls: ['./cube-page.component.scss'],
})
export class CubePageComponent implements OnInit {
  constructor(private cubeFacade: CubeFacade) {}

  private x = 0;
  private y = 0;

  public cubePositions$: Observable<GenericKeyStringObject<CubePositionI>> =
    this.cubeFacade.cubePositions$;

  public ngOnInit(): void {
    this.cubePositions$.subscribe(
      (positions: GenericKeyStringObject<CubePositionI>) => {
        console.log(positions, 'positions');
        // this.currentPosX = positions.CubeColors
        // this.currentPosY =
      }
    );
  }

  public onClickCube({ key, value }: any): void {
    this.y = value.posY + 90;
    console.log('x!', value, value.posX);
    this.cubeFacade.setAddCubePositions({
      key: key,
      values: {
        posX: this.x,
        posY: this.y,
        axes: value.axes,
      },
    });
  }

  public onWheelCube(value: any = 'sad'): void {
    console.log('y!', value, value.posX);
    this.y = value.posY + 90;

    this.cubeFacade.setAddCubePositions({
      key: value.key,
      values: {
        posX: this.x,
        posY: this.y,
        axes: value.axes,
      },
    });
  }

  trackByFn(_: number, item: KeyValue<string, any>): string {
    return item.key;
  }
}
