import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Iuser } from '../../model/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {
  userArr : Array<Iuser> = []
  constructor(private _usersService : UsersService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.getAllUsers()
    this._router.navigate(['/users',this.userArr[0].id])
  }
  getAllUsers(){
    this._usersService.getAllUser()
      .subscribe({
        next : res =>{
          this.userArr = res
          
        },
        error : err =>{
          console.log(err)
          
        }
      })
  }

}
