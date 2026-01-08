import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ifair } from 'src/app/shared/model/fair';
import { FairsService } from 'src/app/shared/service/fairs.service';

@Component({
  selector: 'app-fairs-details',
  templateUrl: './fairs-details.component.html',
  styleUrls: ['./fairs-details.component.scss']
})
export class FairsDetailsComponent implements OnInit {
  fairObj ! : Ifair
  constructor(private _routes : ActivatedRoute,
            private _fairService : FairsService
  ) { }

  ngOnInit(): void {
    this._routes.paramMap
      .subscribe(params =>{
        let id = params.get('id')!
        if(id){
          this._fairService.getSingle(id)
            .subscribe({
              next : res =>{
                this.fairObj = res
              },
               error : err =>{
                console.log(err);
                
               }
            })
        }

      })
  }

}
