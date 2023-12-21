import { RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cvTech1/cv/cv.component";
import { MiniWordComponent } from "./mini-word/mini-word.component";
import { RainbowComponent } from "./rainbow/rainbow.component";

const APP_ROUTING: Routes = [
  {
    path:'cv',children: [
      {path: '', component: CvComponent}
    ]
  }
  ,
  {path: '', component: CvComponent},
  {path: 'word', component: MiniWordComponent},
  {path: 'rainbow', component: RainbowComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'NotFound', component: ErrorComponent},
  // {path: '**', component: ErrorComponent},
];

export const ROUTING =RouterModule.forRoot(APP_ROUTING);
