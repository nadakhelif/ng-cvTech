import {Component, Input} from '@angular/core';

import { Personne } from 'src/app/model/Personne';
import { EmbaucheService } from 'src/app/service/embauche/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {

  @Input()
  embauches: Personne[] = []
  constructor(private embaucheService: EmbaucheService) {
  }

  ngOnInit(): void {
    this.embauches = this.embaucheService.getCvs();
  }
}
