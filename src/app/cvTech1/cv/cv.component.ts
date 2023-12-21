import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes : Personne[]  = [];
  selectedPersonne : Personne | null = null;
  constructor() { }

  ngOnInit(): void {
    this.personnes = [
      new Personne(1,'khelif','nada',21,"123","as.jpg","engeneer"),
      new Personne(2,'emna','gaidi',22,"123","el2.jpg","pilote"),
      new Personne(3,'hamza','ben ammar ',22,"123","el3.jpg","danceur")
    ]
  }
  selectPersonne(personne :Personne){
    this.selectedPersonne = personne;
  }

}
