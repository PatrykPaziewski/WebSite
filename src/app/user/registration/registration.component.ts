import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {
  public isAdmin: boolean;
  constructor(public service: UserService, private router: Router, private toastr: ToastrService, public dialogRef: MatDialogRef<RegistrationComponent>) { }
  
  ngOnInit() {
    this.service.formModel.reset();
    this.isAdmin = this.service.roleMatch(['Admin']);
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
          if (this.isAdmin){
            this.onClose();
          }
        }
        else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicatedUserName':
                this.toastr.error('Username is already taken', 'Registration failed.');
                break;

              default:
                this.toastr.error(element.description, 'Registration failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
    
  };

  onClose(){
    this.dialogRef.close();
  }

}
