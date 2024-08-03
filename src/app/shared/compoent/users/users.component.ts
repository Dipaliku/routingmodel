import { Component, OnInit } from '@angular/core';
import { usersservice } from '../../services/users.services';
import { Iuser } from '../../model/users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersData ! : Array<Iuser>;
  userId ! : string;
  private _routes: any;
  constructor(
    private _usersservice : usersservice,
  ) { }

  ngOnInit(): void {
    this.usersData = this._usersservice.fetchAllusers();
   
  }

}
