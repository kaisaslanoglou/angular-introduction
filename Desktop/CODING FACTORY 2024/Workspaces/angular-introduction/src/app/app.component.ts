import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindingExampleComponent } from './components/event-binding-example/event-binding-example.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,
  RouterOutlet,
  ListGroupMenuComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  
}
