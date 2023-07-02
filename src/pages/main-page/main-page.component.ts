import { Component, HostListener, Inject, OnInit, Self } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FirstScreenComponent } from './components/first-screen/first-screen.component';
import { SecondScreenComponent } from './components/second-screen/second-screen.component';
import { ThirdScreenComponent } from './components/third-screen/third-screen.component';
import { FourthScreenComponent } from './components/fourth-screen/fourth-screen.component';
import { interval, Subscription, takeWhile, timer } from 'rxjs';
import { screensArray } from '@constants';
import { GearComponent } from '../../shared/features/gear/gear.component';
import { ScreensAnimation } from '../../shared/common/animations/mai-page.animation';
import { ParentDirective } from '../../shared/common/directives';
import { GearService } from '@services';
import { EventsService } from '@services';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    FirstScreenComponent,
    SecondScreenComponent,
    ThirdScreenComponent,
    FourthScreenComponent,
    GearComponent,
    ParentDirective,
  ],
  animations: [ScreensAnimation],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [EventsService],
})
export class MainPageComponent implements OnInit {
  public currentScreen: number = this.gearService.currentScreen$.value;
  public screens: string[] = screensArray;

  public newFontSize: number = 10;

  private aboutEntered: boolean = false;
  private delay: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private gearService: GearService
  ) {}

  ngOnInit(): void {
    this.gearService.currentScreen$.subscribe((screen) => {
      this.currentScreen = screen;
      this.newFontSize = 10;

      switch (screen) {
        case 0:
          this.newFontSize = 10;
          break;
        case 1:
          this.newFontSize = 1.5;
          break;
        case 2:
          this.newFontSize = 3;
          break;
        case 3:
          this.newFontSize = 3;
          break;
      }
    });

    this.gearService.gearPosition$.subscribe((x) => {
      console.log(x, 'x');
    });
  }

  public onTabsEntered(value: boolean): void {
    this.aboutEntered = value;
  }

  @HostListener('window:wheel', ['$event']) onWindowScroll(
    event: WheelEvent
  ): void {
    if (!this.delay && !this.aboutEntered) {
      this.screenCounter(event);
    }
  }

  private screenCounter(event: WheelEvent): void {
    this.delay = true;

    if (event.deltaY > 0) {
      this.gearService.nextScreen();
    } else {
      this.gearService.prevScreen();
    }

    this.changeGearSize();

    timer(500).subscribe(() => {
      this.delay = false;
    });
  }

  public changeGearSize(): void {
    const htmlElement = this.document.documentElement;
    const styles = window.getComputedStyle(htmlElement);
    const fontSize = styles.getPropertyValue('font-size');

    let currentSize = Number(fontSize.split('px')[0]);
    // let neededSize = this.defineNeededSize();
    let direction = currentSize - this.newFontSize;

    this.subscription.add(
      interval(1)
        .pipe(
          takeWhile(() => {
            if (direction > 0) {
              return currentSize > this.newFontSize;
            } else {
              return currentSize < this.newFontSize;
            }
          })
        )
        .subscribe(() => {
          if (direction > 0) {
            currentSize = currentSize - 0.25;
          } else {
            currentSize = currentSize + 0.25;
          }
          htmlElement.style.fontSize = currentSize + 'px';
        })
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // public ngOnDestroy(): void {
  //   this.subscriptions.forEach((s) => s?.unsubscribe());
  // }
}
