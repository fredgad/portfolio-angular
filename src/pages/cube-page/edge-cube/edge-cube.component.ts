import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edge-cube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edge-cube.component.html',
  styleUrls: ['./edge-cube.component.scss']
})
export class EdgeCubeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
