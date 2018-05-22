import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Chartist from 'chartist';
import { Prayer, PrayerState } from '../_models/index';
import * as myPrayers from '../_globals/prayers';


@Component({
  selector: 'prayer-app-dashboard',
  templateUrl: './prayer-dashboard.component.html'
})
export class PrayerDashboardComponent implements OnInit {
  active_prayers: Prayer[];
  prayers: Prayer[];
  prayer_states: PrayerState[]; // to be done
  last_prayer_state: PrayerState; // interim solution
  selected_prayer: Prayer;

  constructor(private router: Router) { 
    this.active_prayers = []
  }
  ngOnInit() {
    this.prayers = myPrayers.Prayers;
    this.last_prayer_state = JSON.parse(localStorage.getItem('prayer_states'))      
    if (this.last_prayer_state)
    {
      this.active_prayers.push(this.prayers[this.last_prayer_state.id-1]);
      this.prayers.splice(this.last_prayer_state.id-1, 1);
    }
  }  
  onSelect(prayer: Prayer){
    this.selected_prayer = prayer;
  }
  onSaveAndBack($event){
      // to be transformed(serialized) in to a prayer state model, and more logical definition here.
      localStorage.setItem('prayer_states', JSON.stringify({ prayer:this.selected_prayer, started:true, archived: false, selected: true, id: this.selected_prayer.id, index_current_day: $event}));
      this.last_prayer_state = { started:true, archived: false, selected: true, id: this.selected_prayer.id, index_current_day: $event}
      this.active_prayers.pop();
      this.active_prayers.push(this.prayers[this.last_prayer_state.id-1]);
      this.selected_prayer = null;
  }

}
