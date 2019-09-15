import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VerbService } from 'src/app/shared/verbservice';

declare interface Verbs {
  Name : '',
  Translation: '',
  IndicativoPresenteP1: '',
  IndicativoPresenteP2: '',
  IndicativoPresenteP3: '',
  IndicativoPresenteM1: '',
  IndicativoPresenteM2: '',
  IndicativoPresenteM3: ''
}
export const Verbs: Verbs[] = [];

@Component({
  selector: 'app-add-verb',
  templateUrl: './add-verb.component.html',
  styles: []
})
export class AddVerbComponent implements OnInit {
  formModel = {
    Name : '',
    Translation: '',
    IndicativoPresenteP1: '',
    IndicativoPresenteP2: '',
    IndicativoPresenteP3: '',
    IndicativoPresenteM1: '',
    IndicativoPresenteM2: '',
    IndicativoPresenteM3: ''
  }

  Verbs: any[];
  constructor(public service: VerbService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.addVerb().subscribe(
      (res: any) => {
        if (res === 1) {
          this.service.formModel.reset();
          this.toastr.success('New verb added!', 'Creation successful.');
          Verbs.push(this.service.formModel.value)
        } else {
          this.toastr.error('Creation failed.');
      }
      },
      err => {
        console.log(err);
      }
    );
  }
}