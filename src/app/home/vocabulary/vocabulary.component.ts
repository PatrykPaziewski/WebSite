import { Component, OnInit } from '@angular/core';
import { VerbService } from 'src/app/shared/verbservice';


@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styles: []
})
export class VocabularyComponent implements OnInit {
  objectKeys = Object.keys;
  Verbs;
  headElements = 
  ['Verb',
    'Translation',
    'Yo',
    'Tú',
    'él, ella, usted',
    'nosotros/as',
    'vosotros/as',
    'ellos,ellas, ustedes'
  ];

  constructor(public service:VerbService) { }



  ngOnInit() {
    this.service.GetAll().subscribe( 
      res =>{
        var List = Object.values(res);
        var arr = []
        List.forEach(element => {
        var verb = this.objectKeys(element)
        var single = {}
        verb.forEach(x => {
          if(x !== "id"){
            single[x] = element[x]
          }
         
        });
        arr.push(single)
        this.Verbs = arr;
      });
        },
      err =>{
        console.log(err)
      }
      );
  }

}
