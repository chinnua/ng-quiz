import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from '../models/question.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  question: Question;
  alphabets: any = ['A', 'B', 'C', 'D'];
  chosenAnswer: any;
  correctAnswerCount: number = 0;
  wrongAnswerCount: number = 0;
  showAlert: boolean = false;

  customSwal = Swal.mixin({
    customClass: {
      confirmButton: 'e-btn primary'
    },
    buttonsStyling: false,
  });

  constructor(private questionService: QuestionsService) { }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion() {
    this.chosenAnswer = null;
    this.questionService.getQuestions().subscribe(res => {
      this.question = res['results'][0] as Question;
      this.question.all_answers = this.question.incorrect_answers.concat(this.question.correct_answer).sort();
    });
  }

  selectAnswer(answer: string) {
    this.chosenAnswer = answer;
  }

  validateAnswer() {
    if (this.question.correct_answer === this.chosenAnswer) {
      this.correctAnswerCount++;
      this.customSwal.fire({
        title: 'Wow!',
        html: 'That\'s the correct answer.',
        type: 'success'
      });
    } else {
      this.wrongAnswerCount++;
      this.customSwal.fire({
        title: 'Oops...',
        html: `The correct answer for ${this.question.question} is <strong>${this.question.correct_answer}</strong>.`,
        type: 'error'
      });
    }
    this.getQuestion();
  }

}
