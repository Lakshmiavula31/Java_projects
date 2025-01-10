import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-paper1',
  templateUrl: './paper1.component.html',
  styleUrl: './paper1.component.scss'
})
export class Paper1Component {
  questions: any[] = [];
  currentQuestion: any;
  answerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.answerForm = this.fb.group({
      selectedOption: [null]
    });
  }

  ngOnInit(): void {
    this.fetchQuestions();
  }
  fetchQuestions(): void {
    this.http.get<any[]>('http://localhost:8080/api/questions').subscribe((data) => {
      this.questions = data;
      if (this.questions.length) {
        this.currentQuestion = this.questions[0];
      }
    });
  }

  selectQuestion(index: number): void {
    this.currentQuestion = this.questions[index];
    this.answerForm.reset();
  }
  submitAnswer(): void {
    const selectedAnswer = {
      questionId: this.currentQuestion.id,
      selectedOption: this.answerForm.value.selectedOption
    };

    this.http.post('http://localhost:8080/api/submit-answer', selectedAnswer).subscribe(() => {
      alert('Answer submitted successfully!');
    });
  }


}
