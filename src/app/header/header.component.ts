import { Component } from '@angular/core';

// Decorators like @Component({}) are used by Angular to add metadata & configuration to classes
@Component({
  selector: 'app-header',
  standalone: true, // This property marks the component as a standalone component, there are other components in Angular for example Module based Components
  templateUrl: './header.component.html',
  // template: '<h1>My Header Component</h1>', This is not recommended, use templateUrl instead
  styleUrl: './header.component.css',
  // styles: ['h1 { color: blue; }'], // Use this for inline styling (This is not recommended, use styleUrl instead)
  // styleUrls: ['./header.component.css'], // Use this for multiple stylesheets
})
export class HeaderComponent {}
