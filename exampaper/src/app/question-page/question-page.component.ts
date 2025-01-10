import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrl: './question-page.component.scss'
})
export class QuestionPageComponent implements OnInit {
  questionNumber: number = 1;
  question = {
    text: 'Using Spring Security, it is possible to customize the authentication token by creating a child class as shown below:',
    codeSnippet: `public class CustomAuthenticationToken extends XXX {}`,

    options: [
      'UsernamePasswordAuthenticationToken',
      'AuthenticationToken',
      'FilterAuthenticationToken',
      'UserAuthenticationToken',
    ],
    correctAnswer: 'UsernamePasswordAuthenticationToken',
  
  };

  selectedOption: string | null = null;
  

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.questionNumber = +params['id'];
    });
  }

  onSubmit() {
    this.router.navigate(['/answer', this.questionNumber]);
  }

}
