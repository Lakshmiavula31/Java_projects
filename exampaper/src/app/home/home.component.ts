import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  steps = Array.from({ length: 20 }, (_, i) => i + 1); // Generate steps 1 to 24
  currentStep = 1;

  constructor(private router: Router) {}

  navigateToQuestion(step: number) {
    this.currentStep = step;
    this.router.navigate(['/question', step]);
  }

}
