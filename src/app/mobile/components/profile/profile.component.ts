import { Component, OnInit, ViewChild } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  @ViewChild(FormComponent) form!:FormComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openForm(){
    this.form.ishowForm(true)
  }

}
