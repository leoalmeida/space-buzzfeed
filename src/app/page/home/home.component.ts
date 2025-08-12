import { Component, computed, inject, Signal } from '@angular/core';
import { QuizzQuestionsService } from '../../services/quizz-questions';
import { QuizzComponent } from '../../component/quizz/quizz.component';

@Component({
  selector: 'app-home',
  imports: [QuizzComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private quizzService: QuizzQuestionsService = inject(QuizzQuestionsService);

  constructor() {
    this.quizzService.getAll();
  }

  filteredQuizzList = computed(() => {
    return this.quizzService.items();
  });

}
