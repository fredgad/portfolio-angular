import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.scss'],
})
export class SecondScreenComponent implements OnInit {
  @Output() public aboutEntered = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public onMouseEnter(): void {
    this.aboutEntered.emit(true);
  }

  public onMouseLeave(): void {
    this.aboutEntered.emit(false);
  }

  public aboutMouseover(s: number): void {}
}
