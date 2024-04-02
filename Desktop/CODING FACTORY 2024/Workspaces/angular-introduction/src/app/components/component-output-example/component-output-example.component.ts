import { Component } from '@angular/core';
import { EPerson, ManyPerson } from 'src/app/shared/interfaces/person';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';

@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SimpleDataTableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {
  manyPerson = ManyPerson

  onPersonClicked(person: EPerson) {
    alert(this.personTemplate(person))
  }

  personTemplate(person: EPerson) {
    return `
    Person Details: 
    First Name: ${person.givenName}
    Last Name: ${person.surName}
    Age: ${person.age}
    Emai: ${person.email}
    Education: ${person.education}
    `
  }
}
