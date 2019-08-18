import { Component, OnInit } from '@angular/core';


declare interface Tense {
  path: string;
  title: string;
}
export const ROUTES: Tense[] = [
  {
    path: "/home/grammar/IndicativoPresente",
    title: "Indicativo presente",
  }
];

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
})
export class GrammarComponent implements OnInit {

  TenseButtons: any[];
  constructor() { }

  ngOnInit() {
    this.TenseButtons = ROUTES.filter(TenseButton => TenseButton)
  }

}
