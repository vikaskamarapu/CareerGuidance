import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ExamsComponent } from './exams/exams.component';
import { NewsComponent } from './news/news.component';
import { FaqComponent } from './faq/faq.component';
import { AppRoutingModule } from './app-routing.module';
import { InterComponent } from './inter/inter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    ExamsComponent,
    NewsComponent,
    FaqComponent,
    InterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
