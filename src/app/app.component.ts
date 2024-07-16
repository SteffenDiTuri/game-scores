import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule] // Ensure RouterModule is imported in the standalone component
})
export class AppComponent {
  title = 'viversel-frontend';
}
