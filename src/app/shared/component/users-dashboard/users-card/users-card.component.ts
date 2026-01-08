import { Component, Input, OnInit } from '@angular/core';
import { Iuser } from 'src/app/shared/model/users';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.scss']
})
export class UsersCardComponent implements OnInit {
  @Input() userObj ! : Iuser
  constructor() { }

  ngOnInit(): void {
  }

}
