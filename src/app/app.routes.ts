import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {TakeActionComponent} from "./take-action/take-action.component";
import {FocusAreasComponent} from "./focus-areas/focus-areas.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'take-action', component: TakeActionComponent},
  {path: 'focus-areas', component: FocusAreasComponent}
];
