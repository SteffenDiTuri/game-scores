import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,   // Marking this component as standalone
  imports: [RouterModule, FooterComponent],  // Import RouterModule for router-outlet to work
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Angular App';
}
