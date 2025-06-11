import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { CheckInComponent } from './features/check-in/check-in.component';
import { SummaryComponent } from './features/summary/summary.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'check-in', component: CheckInComponent },
    { path: 'summary', component: SummaryComponent },
];
