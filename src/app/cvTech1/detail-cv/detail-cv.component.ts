import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Personne';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() personne: Personne | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
