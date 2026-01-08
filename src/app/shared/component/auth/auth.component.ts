import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { SnackBarService } from '../../service/snack-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isAreadyAccount : boolean = false
  isLoading : boolean = false
  @ViewChild('login') loginForm ! : NgForm
  @ViewChild('signUp') signUpForm ! : NgForm
  constructor(private _auth : AuthService,
              private _snackBar : SnackBarService,
              private _router : Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.isLoading = true
    let obj = this.loginForm.value
    this._auth.login(obj)
    .subscribe({
      next : res =>{
        this._auth.setToken(res.token)
        this._auth.setUserRole(res.userRole)
        this._snackBar.snackBar(res.message)
        this._router.navigate(['home'])
        this.isLoading = false
      },
        error : err =>{
          this._snackBar.snackBar(err.err.message)
          this.isLoading = false
        }
    })
     
  }
  onSignUp(){
    this.isLoading = true
    let obj = this.signUpForm.value
    this._auth.signUp(obj)
      .subscribe({
        next : res =>{
          this.isLoading = false
          this._auth.setToken(res.token)
          this._auth.setUserRole(res.userRole)
          this._snackBar.snackBar(res.message)
        },
        error : err =>{
          this.isLoading = false
          this._snackBar.snackBar(err.err.message)
        }
      })
  }

}
