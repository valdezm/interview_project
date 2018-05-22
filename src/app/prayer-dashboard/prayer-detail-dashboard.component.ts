import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Prayer } from '../_models/prayer.model'
@Component({
    selector: 'prayer',
    template: `
    <div class="col-md-12">
    <div class="card card-profile">
        <div class="card-avatar">
            <a href="#pablo">
                <img class="img" src="../assets/img/days/day{{this.current_index+1}}.jpg" />
            </a>
        </div>
        <div class="card-body">
            <h6 class="card-category text-gray">{{prayer.title}}</h6>
            <h4 class="card-title">Day {{this.current_index+1}} Title (TBD)</h4>
            <p class="card-description">
                {{prayer.prayers[current_index]}}
            </p>
            <a (click)="nextPrayer()" class="btn btn-success">Next</a>
            <a (click)="savePrayerState()" class="btn btn-danger">Back</a>
        </div>
    </div>
</div>
    `
})
export class PrayerDetailDashboardComponent {
    current_index: number;
    
    @Output() onSaveAndBack = new EventEmitter();
    @Input() prayer: Prayer;
    constructor() { 
        this.current_index = 0; // This will be changed to be pulled from the current storage/API, prayer states model.
    }
    nextPrayer(){
        this.current_index++;
    }
    savePrayerState(){
        this.onSaveAndBack.emit(this.current_index);
    }
}