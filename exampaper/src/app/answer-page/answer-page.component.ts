import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-answer-page',
  templateUrl: './answer-page.component.html',
  styleUrl: './answer-page.component.scss'
})
export class AnswerPageComponent {
  questionNumber: number = 1;
  selectedAnswer: string = '';
  
  

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.questionNumber = +params['id'];
      // Retrieve the selected answer from localStorage or a service
      this.selectedAnswer = localStorage.getItem(`answer${this.questionNumber}`) || 'No Answer Selected';
    });
  }
  goBack() {
    this.router.navigate(['/question', this.questionNumber]);
  }

}
