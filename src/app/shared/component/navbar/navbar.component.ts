import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen : boolean = false
  constructor(private _router : Router) { }

  ngOnInit(): void {
  }
  onShow(){
    this.isOpen = ! this.isOpen
  }
  onLogOut(){
    localStorage.clear()
    this._router.navigate([''])
  }
}
