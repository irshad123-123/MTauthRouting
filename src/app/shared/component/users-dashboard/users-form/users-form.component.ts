import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';
import { Iuser } from 'src/app/shared/model/users';
import { SnackBarService } from 'src/app/shared/service/snack-bar.service';
import { UsersService } from 'src/app/shared/service/users.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
  isInEditMode : boolean = false
  userObj ! : Iuser
  @ViewChild('formRef') formRef ! : NgForm
  constructor(private _uuid : UuidService,
              private _userService : UsersService,
              private _snackBar : SnackBarService,
              private _router : Router,
              private _routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._routes.paramMap
      .subscribe(param =>{
        let id = param.get('id')
        if(id){
          this._userService.getSingle(id)
            .subscribe({
              next : res =>{
                this.isInEditMode = true
                this.userObj = res
                setTimeout(()=>{
                  this.formRef.form.patchValue(res)
                },0)
              }
            })
        }
      })
  }
onAddUser(){
  if(this.formRef.valid){
      let obj = {
    ...this.formRef.value,
    id : this._uuid.Uuid()
  }
  this._userService.addUser(obj)
    .subscribe({
      next : res =>{
        this._snackBar.snackBar('The new user is added successfully!!!')
        this._router.navigate(['users'])
      },
      error : err =>{
        console.log(err)
        
      }
    })
  }
}
onUpdate(){
  let Obj = {
    ...this.formRef.value,
    id : this.userObj.id
  }
  this._userService.updateUser(Obj)
    .subscribe({
      next : res =>{
        this._snackBar.snackBar('The user detail is updated successfully!!!')
        this._router.navigate(['users'])
      }
    })
}
}
