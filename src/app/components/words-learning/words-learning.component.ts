import { Component, OnInit } from '@angular/core';
import { VerbService } from 'src/app/shared/verb.service';


@Component({
  selector: 'app-words-learning',
  templateUrl: './words-learning.component.html',
  styleUrls: ['./words-learning.component.scss']
})
export class WordsLearningComponent implements OnInit {
    word = {
        'name': 'Loading...',
        'translation': 'Loading...'
    }
  constructor(public service:VerbService) { }

  ngOnInit() {
    this.generateWord()
  };
  generateWord(){
    this.service.GetRandom().subscribe( 
      res =>{
       this.word = {
         'name': res['name'],
         'translation': res['translation']
       }
      },
      err =>{
        console.log(err)
      }
    );
  }
}
