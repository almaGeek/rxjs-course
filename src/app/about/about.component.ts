import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
    concat,
    fromEvent,
    interval,
    noop,
    observable,
    Observable,
    of,
    timer,
    merge,
    Subject,
    BehaviorSubject,
    AsyncSubject,
    ReplaySubject
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


    /*** emitting streams of values */
    ngOnInit() {

        document.addEventListener('click', evt  => {
            console.log(evt);
        });
    
        // perform a task periodiquly here we emit a value each second
        let counter = 0;
        setInterval(()=> {
            console.log(counter);
            counter ++;
        }, 1000);

        // only contains one value
        setTimeout(() =>{
            console.log("finished...");
        }, 3000)
    }


}






