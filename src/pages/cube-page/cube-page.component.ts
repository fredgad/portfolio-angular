import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, KeyValue } from '@angular/common';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { CubeFacade } from './store/cube.facade';
import { EdgeCubeComponent } from './edge-cube/edge-cube.component';
import {
  CubePositionI,
  GenericKeyStringObject,
} from '@shared/common/interfaces';
import { TrackByPropertyPipe } from '../../shared/common/pipes/track-by-property.pipe';
import { EventsService } from '@services';

@Component({
  selector: 'app-cube-page',
  standalone: true,
  imports: [CommonModule, EdgeCubeComponent, TrackByPropertyPipe],
  templateUrl: './cube-page.component.html',
  styleUrls: ['./cube-page.component.scss'],
})
export class CubePageComponent implements OnInit {
  constructor(private cubeFacade: CubeFacade) {}
  private eventService = inject(EventsService);

  private getWord$: Observable<string> = this.eventService.word$;
  private numbers$: BehaviorSubject<number[]> = this.eventService.numbers$;

  public cubePositions$: Observable<GenericKeyStringObject<CubePositionI>> =
    this.cubeFacade.cubePositions$;

  public ngOnInit(): void {
    this.numbers$.subscribe((x) => {
      console.log(x, 'numbers$');
    });
  }

  public funcEvent(): void {
    this.getWord$.pipe(map((value) => value + ' word_2')).subscribe((x) => {
      console.log('getWord$ : ', x);
    });
  }

  public onClickCube({ key, value }: any): void {
    this.cubeFacade.setAddCubePositions({
      key: key,
      values: {
        posX: value.posX + 90,
        posY: value.posY,
        axes: value.axes,
      },
    });
  }

  public onWheelCube({ key, value }: any): void {
    this.cubeFacade.setAddCubePositions({
      key: key,
      values: {
        posX: value.posX,
        posY: value.posY + 90,
        axes: value.axes,
      },
    });
  }

  trackByFn(_: number, item: KeyValue<string, any>): string {
    return item.key;
  }
}
