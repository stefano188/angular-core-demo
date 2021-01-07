import {AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, QueryList, Self, SkipSelf, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './courses/course-card/course-card.component';
import {HighlightedDirective} from './courses/directives/highlighted.directive';
import {Observable} from 'rxjs';
import { AppConfig, APP_CONFIG, CONFIG_TOKEN } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  /* providers is not necessary if we use Three-Shakeable Providers to get the token (CONFIG_TOKEN) */
  /* providers: [
    {
      // provide: CONFIG_TOKEN, useFactory: () => APP_CONFIG .. or
      provide: CONFIG_TOKEN, useValue: APP_CONFIG
    }
  ] */
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;


    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards : QueryList<ElementRef>;


    /* get an instance of the directive accessing via  HighlightedDirective */
    @ViewChild(HighlightedDirective)
    highlightedDir: HighlightedDirective;

    /* the same can be achived accessing via Host Component 
       and specifying what to read {read:HighlightedDirective} */
    @ViewChild(CourseCardComponent, {read:HighlightedDirective})
    highlightedCourseDir: HighlightedDirective;

    /* or even by accessing via template name reference */
    @ViewChild('highlighter')
    highlightedDirByName: HighlightedDirective;


    /* 
    Because AppConfig is an interface, Angular cannot create an instance of AppConfig so it cannot create a unique token with AppConfig name
    so the only way is to use @Inject and pass the instance we have created in config.ts  CONFIG_TOKEN.
    @Inject(CONFIG_TOKEN)

    @Optional() private service: AnyService - if no instance of AnyService is provided the program will not crash on bootstrap
    @Self() private service: AnyService - breaks the hierarchical rules of inheritance from parent component searching for a private instance of AnyService 
    @SkipSelf() private service: AnyService - the opposite of @Self (wants an instance of AnyService from parent component)
  */
  constructor(@Inject(CONFIG_TOKEN) private config: AppConfig) {

    console.log('config', config);
  }
    

    ngAfterViewInit() {
      console.log('1--- highlightedDir', this.highlightedDir);
      console.log('2--- highlightedCourseDir', this.highlightedCourseDir);
      console.log('3--- highlightedDirByName', this.highlightedDirByName);
      // this.highlightedCourseDir.toggle();
    }

    onEditCourse() {
      this.courses[1].category = 'ADVANCED'
    }

    onCourseSelected(course:Course) {

    }

    onToggle(event) {
      console.log('toogle event', event);
    }

}
