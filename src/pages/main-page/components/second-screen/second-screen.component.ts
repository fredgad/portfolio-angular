import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GearService } from '@services';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabsService } from '../../../../shared/common/services/tabs/tabs.service';

@Component({
  selector: 'app-second-screen',
  standalone: true,
  imports: [CommonModule, TabsComponent],
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.scss'],
})
export class SecondScreenComponent implements OnInit, AfterViewInit {
  @Output() public onTabsEnteredOutput = new EventEmitter();

  // @ViewChild('aboutMeRef', { static: true }) aboutMeRef!: ElementRef;
  @ViewChild('aboutMeRef', { static: true }) aboutMeRef!: ElementRef;

  constructor(
    private gearService: GearService,
    private tabsService: TabsService
  ) {}

  public ngOnInit(): void {
    this.gearService.initialGearPositions$.subscribe((x) => {
      console.log('initialGearPositions$', x);
    });
  }

  public onTabsEntered(value: boolean): void {
    this.onTabsEnteredOutput.emit(value);
  }

  public ngAfterViewInit(): void {
    const element = this.aboutMeRef.nativeElement as HTMLDivElement;
    const position = this.getPosition(element);
    console.log('Element:position', element, position);

    this.gearService.rewriteSecondGearPositions(
      `${position.top + position.height / 2}px`,
      `${position.left - 50 - window.innerWidth}px`
    );
  }

  private setInitialPos(): void {
    const element = this.aboutMeRef.nativeElement as HTMLDivElement;

    // console.log('Data-r attribute:', element.getAttribute('data-r'));
  }

  public onMouseEnter(): void {
    this.onTabsEnteredOutput.emit(true);
  }

  public onMouseLeave(): void {
    this.onTabsEnteredOutput.emit(false);
  }

  public onMouseOver(event: MouseEvent, tabNumber: number): void {
    this.tabsService.setTab(tabNumber);

    const element = event.target as HTMLElement;
    const position = this.getPosition(element);

    this.gearService.gearPosition$.next({
      top: `${position.top + position.height / 2}px`,
      left: `${position.left - 50}px`,
    });
    this.gearService.rewriteSecondGearPositions(
      `${position.top + position.height / 2}px`,
      `${position.left - 50}px`
    );
  }

  getPosition(element: HTMLElement): {
    top: number;
    left: number;
    height: number;
    width: number;
  } {
    const rect = element.getBoundingClientRect();
    const scrollLeft = document.documentElement.scrollLeft;
    const scrollTop = document.documentElement.scrollTop;
    const { top, left, height, width } = rect;

    return { top: top + scrollTop, left: left + scrollLeft, height, width };
  }
}
