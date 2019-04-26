import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from '../models/question.model';
import Swal from 'sweetalert2';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  question: Question;
  alphabets: any = ['A', 'B', 'C', 'D'];
  chosenAnswer: any;
  correctAnswerCount = 0;
  wrongAnswerCount = 0;
  showAlert = false;
  timer = 10;
  selectedCategory: any;

  customSwal = Swal.mixin({
    customClass: {
      confirmButton: 'e-btn primary'
    },
    buttonsStyling: false,
  });

  constructor(private questionService: QuestionsService, private sharedService: SharedService) { }

  ngOnInit() {
    this.selectedCategory = this.sharedService.getSelectedCategory();
    this.getQuestion(this.selectedCategory);
  }

  startCountDown(seconds) {
    this.timer = seconds;
    let interval = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        // code here will run when the counter reaches zero.
        clearInterval(interval);
      }
    }, 1000);
  }


  getQuestion(selectedCategory: any) {
    this.chosenAnswer = null;
    this.questionService.getQuestions(selectedCategory).subscribe(res => {
      this.question = res['results'][0] as Question;
      this.question.all_answers = this.question.incorrect_answers.concat(this.question.correct_answer).sort();
      this.startCountDown(10);
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
    this.getQuestion(this.selectedCategory);
  }

}
