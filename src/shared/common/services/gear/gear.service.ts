import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, shareReplay, timer } from 'rxjs';
import { GearPositionsI } from '@shared/common/interfaces';
import {
  MAX_GEAR_SCREEN,
  MIN_GEAR_SCREEN,
  GearPositions,
} from '../../constants/gear.constants';

@Injectable({
  providedIn: 'root',
})
export class GearService {
  public initialGearPositions$: BehaviorSubject<any> = new BehaviorSubject(
    GearPositions
  );
  public gearPosition$: BehaviorSubject<GearPositionsI> = new BehaviorSubject(
    this.initialGearPositions$.value[0]
  );

  public currentScreen$: BehaviorSubject<number> = new BehaviorSubject(0);

  public rewriteSecondGearPositions(top: string, left: string): void {
    this.initialGearPositions$.value[1] = { top, left };
  }

  public changeGearPositionByScreen(screen: number): void {
    let { top, left } = GearPositions[screen];
    this.changeGearPosition(top, left);
  }

  public changeGearPosition(top: string, left: string): void {
    this.gearPosition$.next({ top, left });
  }

  public nextScreen(): void {
    let newScreen =
      this.currentScreen$.value === MAX_GEAR_SCREEN
        ? MAX_GEAR_SCREEN
        : this.currentScreen$.value + 1;

    this.currentScreen$.next(newScreen);
    this.changeGearPositionByScreen(newScreen);
  }

  public prevScreen(): void {
    let newScreen =
      this.currentScreen$.value === MIN_GEAR_SCREEN
        ? MIN_GEAR_SCREEN
        : this.currentScreen$.value - 1;

    this.currentScreen$.next(newScreen);
    this.changeGearPositionByScreen(newScreen);
  }

  constructor() {}
}
