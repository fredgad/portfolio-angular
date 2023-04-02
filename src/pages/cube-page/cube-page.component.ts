import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-cube-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cube-page.component.html',
  styleUrls: ['./cube-page.component.scss'],
})
export class CubePageComponent implements OnInit {
  constructor() {}
  public sad$: BehaviorSubject<string> = new BehaviorSubject(
    'rotateX(0) rotateY(0)'
  );
  private x = 0;
  private y = 0;

  ngOnInit(): void {}

  funcTestX() {
    console.log('x');
    this.x = this.x + 90;
    // this.y = this.y + 45;
    this.sad$.next(`rotateX(${this.x}deg) rotateY(${this.y}deg)`);
  }

  funcTestY() {
    console.log('y');
    // this.x = this.x + 90;
    this.y = this.y + 90;
    this.sad$.next(`rotateX(${this.x}deg) rotateY(${this.y}deg)`);
  }
}
