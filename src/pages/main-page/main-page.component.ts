import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FirstScreenComponent } from './components/first-screen/first-screen.component';
import { SecondScreenComponent } from './components/second-screen/second-screen.component';
import { ThirdScreenComponent } from './components/third-screen/third-screen.component';
import { FourthScreenComponent } from './components/fourth-screen/fourth-screen.component';
import { interval, Observable, Subscription, takeWhile, timer } from 'rxjs';
import { screensArray } from './constants';
import { GearComponent } from '../../shared/features/gear/gear.component';
import { ScreensAnimation } from '../../shared/animations/mai-page.animation';

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
  ],
  animations: [ScreensAnimation],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public currentScreen: number = 0;
  public screens: string[] = screensArray;

  private aboutEntered: boolean = false;
  private delay: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  public onAboutEntered(value: boolean): void {
    this.aboutEntered = value;
  }

  @HostListener('window:wheel', ['$event']) onWindowScroll(
    event: WheelEvent
  ): void {
    console.log(this.aboutEntered);
    if (!this.delay && !this.aboutEntered) {
      this.screenCounter(event);
    }
  }

  private screenCounter(event: WheelEvent): void {
    this.delay = true;

    if (event.deltaY > 0) {
      this.currentScreen !== 3 && this.currentScreen++;
    } else {
      this.currentScreen !== 0 && this.currentScreen--;
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
    let neededSize = this.defineNeededSize();
    let direction = currentSize - neededSize;

    this.subscription.add(
      interval(1)
        .pipe(
          takeWhile(() => {
            if (direction > 0) {
              return currentSize > neededSize;
            } else {
              return currentSize < neededSize;
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

  private defineNeededSize(): number {
    let fontSize = 10;
    switch (this.currentScreen) {
      case 0:
        fontSize = 10;
        break;
      case 1:
        fontSize = 2;
        break;
      case 2:
        fontSize = 3;
        break;
      case 3:
        fontSize = 3;
        break;
    }

    return fontSize;
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
