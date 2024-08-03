import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/users';
import { ActivatedRoute } from '@angular/router';
import { usersservice } from '../../services/users.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId ! : string;
  userobj ! : Iuser | undefined;
  constructor(
    private _routes : ActivatedRoute,
    private _userservice : usersservice
  ) { }

  ngOnInit(): void {
    this._routes.params
    .subscribe(res=>{
      console.log(res);
      this.userId=res['']
      if(this.userId){
        this.userobj=this._userservice.getuserinfo(this.userId)
      }
    })
    this.userId = this._routes.snapshot.params['userId'];
    console.log(this.userId);
    if(this.userId){
      this.userobj = this._userservice.getuserinfo(this.userId)
    }
  }

}
