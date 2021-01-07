import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    ContentChild,
    ContentChildren,
    DoCheck,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output, QueryList, TemplateRef,
    ViewChild,
    ViewChildren
} from '@angular/core';
import {COURSES} from '../../../db-data';
import {Course} from '../../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, 
                AfterContentChecked, AfterViewChecked, AfterViewInit, AfterContentInit, 
                DoCheck {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseSelected')
    courseEmitter = new EventEmitter<Course>();

    @ContentChildren(CourseImageComponent, {read: ElementRef})
    images: QueryList<ElementRef>;

    constructor() {
        console.log('constructor');
    }

    ngOnChanges(changes) {
        console.log(`ngOnChanges .. Called After the constructor and whenever Angular Change Detection Mechanism is called. 
                    The Input properties are filled with the values`, changes);
    }

    ngOnInit() {
        console.log('ngOnInit .. Called ONCE when component is created');
    }

    ngDoCheck() {
        console.log(`ngDoCheck .. Called After ngOnInit and whenever Angular Change Detection Mechanism is called. 
                    It performs the checks on the component`);
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit .. Called ONE After ngOnInit');
        // @ContentChild
        // @ContentChildren 
        // .. are populated and available
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit .. Called ONE After ngAfterContentInit');
        // @ViewChild
        // @ViewChildren
        // .. are populated and available
    }


    /* Next we have event that are called every time Angular Change Detection Mechanism is going to be called */

    // ngOnChanges() {
    //     
    // }

    // ngDoCheck() {
    //     
    // }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
    }


    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

    isImageVisible() {
        return this.course && this.course.iconUrl;
    }

    onCourseViewed() {

        this.courseEmitter.emit(this.course);

    }

    cardClasses() {
        if (this.course.category == 'BEGINNER') {
            return 'beginner';
        }
    }

    cardStyles() {
        return {
            'background-image': 'url(' + this.course.iconUrl + ')'

        };
    }



}
