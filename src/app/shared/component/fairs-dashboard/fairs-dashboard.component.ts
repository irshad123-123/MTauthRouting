import { Component, OnInit } from '@angular/core';
import { FairsService } from '../../service/fairs.service';
import { Ifair } from '../../model/fair';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fairs-dashboard',
  templateUrl: './fairs-dashboard.component.html',
  styleUrls: ['./fairs-dashboard.component.scss']
})
export class FairsDashboardComponent implements OnInit {
  fairArr : Array<Ifair> = []
  constructor(private _fairService : FairsService,
              private _router : Router
  ) { }

  ngOnInit(): void {
   this.getFair()
   this._router.navigate(['/fairs',this.fairArr[0].fairId])
  }
  getFair(){
     this._fairService.getAll()
      .subscribe({
        next : res =>{
          this.fairArr = res
          // console.log(res);
          
        },
        error : err =>{
          console.log(err) 
        }
      })
  }

}
