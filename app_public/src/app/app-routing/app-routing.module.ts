import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "../about/about.component";
import {HomepageComponent} from "../homepage/homepage.component";
import {DetailsPageComponent} from "../details-page/details-page.component";

const routes:Routes=[
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path: 'location/:locationId',
    component: DetailsPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
//2017125009 박지웅
