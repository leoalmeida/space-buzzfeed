import { Component, computed, Input, input, OnInit, Signal, signal } from '@angular/core';
import { Quizz } from '../../types/quizz';
import { Question } from '../../types/question';

@Component({
  selector: 'app-quizz',
  imports: [],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {
  @Input() quizz!: Quizz;
  private actualIndex = -1;
  private maxIndex = 0;
  selectedQuestion?:Question; 
  
  selectedOptions: string[] = [];
  finished:boolean = false;
  selectedOption: string = "";
  answerSelected: string = "";

  ngOnInit(){
    if(this.quizz){
      this.maxIndex = this.quizz.questions.length;
      this.goNext();
    }
  }

  selectOption(question: number, selectedOption: string){
    console.log("set: " + selectedOption);
    this.selectedOption = selectedOption;
    this.selectedOptions[question] = this.selectedOption;
    console.log("size: " + this.selectedOptions.length);
    this.goNext();
  }

  async goNext(){
    this.actualIndex+=1;
    if (this.actualIndex<this.maxIndex){
      this.selectedQuestion = this.quizz.questions.at(this.actualIndex);
    }else{
      const finalAnswer:string = await this.checkResult();
      this.finished = true;
      this.answerSelected = this.quizz.results[finalAnswer as keyof typeof this.quizz.results ]
    }
  }

  async checkResult(){
    const result = this.selectedOptions.reduce((previous, current, i, arr)=>{
        if(
          arr.filter(item => item === previous).length >
          arr.filter(item => item === current).length
        ){
          return previous
        }else{
          return current
        }
    })

    return result

  }

}
