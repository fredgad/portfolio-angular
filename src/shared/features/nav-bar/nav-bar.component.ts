import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

    // navWall.classList.add('navWall');
    // nav.classList.add('navOpen');
    // nav.classList.add('navOpenWidth');
  }
}
