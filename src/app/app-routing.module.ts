import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ExamsComponent } from './exams/exams.component';
import { NewsComponent } from './news/news.component';
import { FaqComponent } from './faq/faq.component';
import { InterComponent } from './inter/inter.component';

const routes: Routes=[
  {path:'home',component:HomeComponent},
  {path:'courses',component:CoursesComponent,children:[{path:'inter',component:InterComponent}]},
  {path:'exams',component:ExamsComponent},
  {path:'news',component:NewsComponent},
  {path:'faq',component:FaqComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  declarations:[] ,
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
  })
export class AppRoutingModule { }
