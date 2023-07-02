import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarAnimation, NavBarAnimationStateEnum } from '@animations';
import { BarMenu, BarMenuI } from '@constants';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { timer } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, BrowserAnimationsModule],
  animations: [NavBarAnimation],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  public isOpenNav: boolean = false;
  public navEnum: typeof NavBarAnimationStateEnum = NavBarAnimationStateEnum;
  public pause: boolean = false;
  public barMenu: BarMenuI[] = BarMenu;

  public toggleNav(): void {
    if (this.pause) return;

    this.pause = true;
    this.isOpenNav = !this.isOpenNav;

    for (let x = 0; x < this.barMenu.length; x++) {
      timer(x * 22).subscribe(() => {
        if (this.isOpenNav) {
          this.barMenu[x].state = !this.barMenu[x].state;
        } else {
          let z = this.barMenu.length - x - 1;
          this.barMenu[z].state = !this.barMenu[z].state;
        }
      });
    }
    timer(200).subscribe(() => {
      this.pause = false;
    });
  }
}
