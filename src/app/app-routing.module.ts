import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuznewsComponent } from './buznews/buznews.component';
import { HomeComponent } from './home/home.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'tech',component:TechnewsComponent},
{path:'busi',component:BuznewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
