import { Component } from '@angular/core';

@Component({
  selector: 'app-restricted-content-example',
  standalone: true,
  imports: [],
  templateUrl: './restricted-content-example.component.html',
  styleUrl: './restricted-content-example.component.css'
})
export class RestrictedContentExampleComponent {

}

export interface Credentials{
  email:string;
  password: string;
}

export interface LoggedInUser{
  fullname: string;
  email: string;
}
