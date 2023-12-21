import {inject, Injectable} from '@angular/core';

import {ToastrService} from 'ngx-toastr';
import { Personne } from 'src/app/model/Personne';


@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  toast = inject(ToastrService)
  private embauches: Personne[] = [];

  constructor() {
  }

  getCvs() {
    return this.embauches;
  }

  addCv(cv: Personne) {
    let embauches = this.embauches;
    if (embauches.findIndex((c) => c.id == cv.id) == -1) {
      this.embauches.push(cv)
      this.toast.success(`Le candidat ${cv.firstName} ${cv.name} a été ajouté`)
    } else {
      this.toast.warning(`Le candidat ${cv.firstName} ${cv.name} est déja embauché`)
    }
  }

  deleteCv(id: number) {
    let embauches = this.embauches;
    const index = embauches.findIndex((cv) => cv.id == id)
    if (index !== -1) {
      embauches.splice(index, 1)
      this.toast.success('Candidat supprimé')
    } else {
      this.toast.warning('Candidat non trouvé')
    }
  }
}
