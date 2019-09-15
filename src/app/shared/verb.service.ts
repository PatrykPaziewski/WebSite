import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VerbService {
  
  constructor(private fb: FormBuilder, private http: HttpClient) { }
    readonly BaseURI = environment.BaseURL

  formModel = this.fb.group({
    Name: ['', Validators.required],
    Translation: ['', Validators.required],
    IndicativoPresenteP1: [''],
    IndicativoPresenteP2: [''],
    IndicativoPresenteP3: [''],
    IndicativoPresenteM1: [''],
    IndicativoPresenteM2: [''],
    IndicativoPresenteM3: ['']
  });

  addVerb(){
    var body = {
        Name: this.formModel.value.Name,
        Translation: this.formModel.value.Translation,
        IndicativoPresenteP1: this.formModel.value.IndicativoPresenteP1,
        IndicativoPresenteP2: this.formModel.value.IndicativoPresenteP2,
        IndicativoPresenteP3: this.formModel.value.IndicativoPresenteP3,
        IndicativoPresenteM1: this.formModel.value.IndicativoPresenteM1,
        IndicativoPresenteM2: this.formModel.value.IndicativoPresenteM2,
        IndicativoPresenteM3: this.formModel.value.IndicativoPresenteM3
      };
      return this.http.post(this.BaseURI + '/Verbs/AddVerb', body);
  }

  GetAll(){
    return this.http.get(this.BaseURI + '/Verbs/GetAll')
  }

  GetRandom(){
    return this.http.get(this.BaseURI + '/Verbs/GetRandom')
  }
}
