import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NameInputComponent } from "./name-input/name-input.component";

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [ RouterModule, NameInputComponent]
})
export class AppComponent {
  title = 'init';
}
