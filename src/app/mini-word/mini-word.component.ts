import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {

  textColor = '';
  fontSize = 16;
  selectedFont = 'Arial';
  sampleText = 'Nada Khelif';

  constructor() { }

  ngOnInit(): void {
  }

}
