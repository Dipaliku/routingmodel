import { Injectable } from "@angular/core"; 
import { Iuser } from "../model/users";

@Injectable({
    providedIn:'root'
})


export class usersservice{
    usersArr : Array<Iuser> = [
        {
            username:'rahul',
            userId :'123',
            userrole:'admin'
        },
        {
            username:'pranshi',
            userId :'124',
            userrole:'buyer'
        },
        {
            username:'sanket',
            userId :'125',
            userrole:'admin'
        },
    ]
      constructor() { }

      fetchAllusers():  Array<Iuser> {
         return this.usersArr;
      }
    
        getuserinfo(id:string):Iuser | undefined{
            return this.usersArr.find(user => user.userId === id)
        }
    }
