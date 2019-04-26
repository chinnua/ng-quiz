import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestions(category: any) {
    if (category.key === 'any') {
      return this.http.get('https://opentdb.com/api.php?amount=1&type=multiple');
    } else {
      return this.http.get(`https://opentdb.com/api.php?amount=1&category=${category.key}&type=multiple`);
    }
  }
}
