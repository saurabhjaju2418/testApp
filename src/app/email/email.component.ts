import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})

export class EmailComponent implements OnInit {

  state: string = '';
    error: any;
    
    constructor(public af: AngularFireAuth,private router: Router, private authService: AuthService) {
    
  }


  onSubmit(formData) {
    if(formData.valid) {
      this.authService.signIn(formData.value.email,formData.value.password);
    }
  }

  ngOnInit() {
  }

}
