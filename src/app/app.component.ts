import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormInputComponent } from './form-input/form-input.component';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [ RouterModule, FormInputComponent]
})
export class AppComponent {
  title = 'TestApp';
}
