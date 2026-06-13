import { Routes } from '@angular/router';
import { StartComponent } from './start-component/start-component';
import { DateTimeComponent } from './date-time-component/date-time-component';
import { Success } from './success/success';

export const routes: Routes = [
    { path: '', redirectTo: 'start', pathMatch: 'prefix'},
    { path: 'start', component: StartComponent },
    { path: 'date-time', component: DateTimeComponent },
    { path: 'success', component: Success}
];
