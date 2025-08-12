import { Injectable, signal } from '@angular/core';
import { Quizz } from '../types/quizz';
import { Observable } from 'rxjs';
import { quizz_questions } from '../mocks/quizz_questions';

@Injectable({
  providedIn: 'root'
})
export class QuizzQuestionsService {

  private apiData: Quizz[] = [...quizz_questions];
  private quizzList = signal<Quizz[]>([]);

  private mockHttpCall = <T>(result: T) => {
    return new Observable<T>(s => {
        s.next(result);
        s.complete();
    });
  }

  items = this.quizzList.asReadonly();

  getAll(): void{
    //return this.http.post<any>(`${this.baseUrl}/signin`, { username, password }, httpOptions);
    console.log("logging");
    console.log(this.apiData.toString());
    this.mockHttpCall<Quizz[]>(this.apiData)
                .subscribe(xs => this.quizzList.set(xs));
  }
}
