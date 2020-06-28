import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RoutingConstants } from './shared/routing-constants';
import { HomePageMenComponent }  from './home-page/home-page-men/home-page-men.component';
import { HomePageWomenComponent }  from './home-page/home-page-women/home-page-women.component';


const routes: Routes = [
  {path:'', redirectTo:RoutingConstants.HOME_PAGE, pathMatch:'full'},
  {path:RoutingConstants.HOME_PAGE, component : HomePageComponent},
  {path:RoutingConstants.HOME_PAGE_MEN, component : HomePageMenComponent},
  {path:RoutingConstants.HOME_PAGE_WOMEN, component : HomePageWomenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
