import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/service/users.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { SnackBarService } from 'src/app/shared/service/snack-bar.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  userObj ! : Iuser
  constructor(private _router : Router,
              private _routes : ActivatedRoute,
              private _userService : UsersService,
              private _dialog : MatDialog,
              private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
    this._routes.paramMap
      .subscribe(param=>{
        let id = param.get('id')
        console.log(id);
        if(id){
          this._userService.getSingle(id)
            .subscribe({
              next : res =>{
                this.userObj = res
              },
              error : err =>{
                console.log(err)
              }
            })
        }
      })
  }
  onRemove(){
    let dialogConfi = new MatDialogConfig()
    dialogConfi.disableClose = true
    dialogConfi.data = `Are you sure want to remove this user with id ${this.userObj.id}`
    let dialogRef = this._dialog.open(GetConfirmComponent,dialogConfi)
    dialogRef.afterClosed()
      .subscribe({
        next : res =>{
          if(res){
            this._userService.removeUser(this.userObj)
              .subscribe({
                next : res =>{
                  this._snackBar.snackBar('The user is removed successfully!!!')
                  this._router.navigate(['users'])
                },
                error : err =>console.log(err)
                
              })
          }
        },
        error : err =>console.log(err)
        
      })
  }
}
