import { Routes } from '@angular/router';
import { EventBindingExampleComponent } from './components/event-binding-example/event-binding-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
    {path: 'event-bind-example', component: EventBindingExampleComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'}

];
