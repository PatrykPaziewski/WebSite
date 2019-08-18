import { Component, OnInit } from '@angular/core';

declare interface Verbs {
  Verb: string;
  Base: string;
  p1: string;
  p2: string;
  p3: string;
  m1: string;
  m2: string;
  m3: string;
}
export const ROUTES: Verbs[] = [
  {
    Verb: "Hablar",
    Base: "Habl",
    p1: "o",
    p2: "as",
    p3: "a",
    m1: "amos",
    m2: "áis",
    m3: "an"
  },
  {
    Verb: "Comer",
    Base: "Com",
    p1: "o",
    p2: "es",
    p3: "e",
    m1: "emos",
    m2: "éis",
    m3: "en"
  },
  {
    Verb: "Vivir",
    Base: "Viv",
    p1: "o",
    p2: "es",
    p3: "e",
    m1: "imos",
    m2: "ís",
    m3: "en"
  }
];

@Component({
  selector: 'app-indicativo-presente',
  templateUrl: './indicativo-presente.component.html'
})
export class IndicativoPresenteComponent implements OnInit {

  Verbs: any[];
  constructor() { }

  ngOnInit() {
    this.Verbs = ROUTES.filter(Verb => Verb)
  }

}
