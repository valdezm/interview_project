import { Prayer } from '../_models/index';
export class PrayerState {
    id: number;
    selected: boolean;
    index_current_day: number;
    archived: boolean;
    started: boolean;
    // prayer?: Prayer;
}
