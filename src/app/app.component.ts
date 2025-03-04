import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CandidateFormComponent } from "./features/candidate-form/candidate-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CandidateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-processo-seletivo';
}
