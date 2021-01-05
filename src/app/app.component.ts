import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

    constructor() {

    }

    ngAfterViewInit() {
      console.log('1--- highlightedDir', this.highlightedDir);
      console.log('2--- highlightedCourseDir', this.highlightedCourseDir);
      console.log('3--- highlightedDirByName', this.highlightedDirByName);
      // this.highlightedCourseDir.toggle();
    }

    onCourseSelected(course:Course) {

    }

    onToggle(event) {
      console.log('toogle event', event);
    }

}
