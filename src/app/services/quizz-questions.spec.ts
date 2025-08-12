import { TestBed } from '@angular/core/testing';

import { QuizzQuestions } from './quizz-questions';

describe('QuizzQuestions', () => {
  let service: QuizzQuestions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizzQuestions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
