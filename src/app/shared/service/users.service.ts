import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Iuser } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

      usersArr : Array<Iuser>= [
  {
    fname: 'Irshad',
    lname: 'Shaikh',
    email: 'irshad@gmail.com',
    contact: 8766737322,
    course: 'B.Sc',
    id: '123',
    profession: 'Angular Developer',
    imgUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
    userRole : 'admin'
  },
  {
    fname: 'Sunny',
    lname: 'Yenpure',
    email: 'sunny@gmail.com',
    contact: 8766737322,
    course: 'BE',
    id: '124',
    profession: 'Software Developer',
    imgUrl: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d',
     userRole : 'candidate'
  },
  {
    fname: 'Balaji',
    lname: 'Barde',
    email: 'balaji@gmail.com',
    contact: 8766737322,
    course: 'BE',
    id: '125',
    profession: 'Designer',
    imgUrl: 'https://images.unsplash.com/photo-1545235617-9465d2a55698',
     userRole : 'admin'
  },
  {
    fname: 'Rohan',
    lname: 'Kulkarni',
    email: 'rohan@gmail.com',
    contact: 8766737322,
    course: 'BCA',
    id: '126',
    profession: 'Full-Stack Developer',
    imgUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
     userRole : 'candidate'
  }
];
user$ : Subject<Iuser> = new Subject()

  getAllUser():Observable<Iuser[]>{
    return of(this.usersArr)
  }
  getSingle(id:string):Observable<Iuser>{
    let findPosi = this.usersArr.find(f=>f.id === id) as Iuser
    return of(findPosi)
  }
  addUser(obj : Iuser):Observable<Iuser>{
    this.usersArr.unshift(obj)
    return of(obj)
  }
  removeUser(obj : Iuser): Observable<Iuser>{
    let getIndex = this.usersArr.findIndex(f=>f.id === obj.id)
    this.usersArr.splice(getIndex, 1)
    return of(obj)
  }
  updateUser(obj : Iuser){
    let getIndex = this.usersArr.findIndex(f=>f.id === obj.id)
    this.usersArr[getIndex]=obj
    return of(obj)
  }
}
