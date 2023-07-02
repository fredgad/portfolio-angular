import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsService } from '../../../../../../shared/common/services/tabs/tabs.service';
import { BackgroundImageDirective } from '@directives';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, BackgroundImageDirective],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Output() public onTabsEnteredOutput = new EventEmitter();

  public tabsService: TabsService = inject(TabsService);
  public tabsPositions$: any = this.tabsService.tabsPositions$;

  public tabsPositions: string[] = this.tabsService.tabsPositions$.value;

  private aboutEntered: boolean = false;

  public mouseTabsEvent(value: boolean): void {
    this.aboutEntered = value;
    this.onTabsEnteredOutput.emit(this.aboutEntered);
  }

  public ngOnInit(): void {
    this.tabsPositions$.subscribe((x: any) => {
      this.tabsPositions = x;
      console.log(x, 'posc');
    });
  }
}
