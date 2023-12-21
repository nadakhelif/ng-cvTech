import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rainbow',
  templateUrl: './rainbow.component.html',
  styleUrls: ['./rainbow.component.css']
})

export class RainbowComponent implements OnInit {
  borderColor: string = 'blue';
  constructor() { }

  ngOnInit(): void {
  }

}
