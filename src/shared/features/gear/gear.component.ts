import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageDirective } from '@shared/common/directives';
import { TrackByPropertyPipe } from '../../common/pipes/track-by-property.pipe';
import { GearImagesI, GearPositionsI } from '@interfaces';
import { GearService } from '@services';
import { BehaviorSubject, Subscription } from 'rxjs';
import { GearImages } from '@constants';

@Component({
  selector: 'app-gear',
  standalone: true,
  imports: [CommonModule, BackgroundImageDirective, TrackByPropertyPipe],
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss'],
})
export class GearComponent implements OnDestroy {
  @Input() screen: number = 0;

  public topPos: string = '';
  public leftPos: string = '';

  public gearPosition$: BehaviorSubject<GearPositionsI> =
    this.gearService.gearPosition$;
  public gearImages: GearImagesI[] = GearImages;

  private subscription: Subscription;

  constructor(private gearService: GearService) {
    this.subscription = this.gearPosition$.subscribe((position) => {
      this.topPos = position.top;
      this.leftPos = position.left;
    });
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
