import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component/test-component.component';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [CommonModule, TestComponentComponent],
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],
})
export class SecondPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
