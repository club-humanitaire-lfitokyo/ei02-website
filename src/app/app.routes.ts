import { Routes, ExtraOptions } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {FocusAreasComponent} from "./focus-areas/focus-areas.component";
import {EducationComponent} from "./focus-areas/pages/education/education.component";
import {OutsideOfJapanComponent} from "./focus-areas/pages/outside-of-japan/outside-of-japan.component";
import {EnvironmentComponent} from "./focus-areas/pages/environment/environment.component";
import {LocalsComponent} from "./focus-areas/pages/locals/locals.component";
import {ChildrenComponent} from "./focus-areas/pages/children/children.component";
import {AnimalsComponent} from "./focus-areas/pages/animals/animals.component";
import {TakeActionComponent} from "./take-action/take-action.component";



export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'focus-areas', component: FocusAreasComponent},
  {path: 'focus-areas/education', component: EducationComponent},
  {path: 'focus-areas/outside-of-japan', component: OutsideOfJapanComponent},
  {path: 'focus-areas/environment', component: EnvironmentComponent},
  {path: 'focus-areas/locals', component: LocalsComponent},
  {path: 'focus-areas/children', component: ChildrenComponent},
  {path: 'focus-areas/animals', component: AnimalsComponent},
  {path: 'take-action', component: TakeActionComponent}
];
