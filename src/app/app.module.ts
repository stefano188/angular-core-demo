import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesModule } from './courses/courses.module';
import { CourseTitleComponent } from './course-title/course-title.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTitleComponent,
  ],
  imports: [
    BrowserModule, // contains inside CommonModule
    BrowserAnimationsModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
