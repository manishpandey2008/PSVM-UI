import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiControlService } from 'src/app/service/api-control.service';
import { LocalStoreService } from 'src/app/service/local-store.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  @ViewChild(FormComponent) form!:FormComponent;

  constructor(private local:LocalStoreService,private api:ApiControlService) { }

  userData:any

  ngOnInit(): void {
    let username=this.local.getLocalStorageValue("user")
    this.getData(username);
  }
  getData(username:any){
    this.api.get("api/user/username/"+username).subscribe(resp=>{
      this.userData=resp
    })
  }

  openForm(){
    this.form.ishowForm(true)
  }

}
