import { Component, OnInit } from '@angular/core';
import { Iprod } from '../../model/prod';
import { ProductsService } from '../../service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prouducts-dashboard',
  templateUrl: './prouducts-dashboard.component.html',
  styleUrls: ['./prouducts-dashboard.component.scss']
})
export class ProuductsDashboardComponent implements OnInit {
  prodArr : Array<Iprod> = []
  constructor(private _prodService : ProductsService,
            private _router : Router
  ) { }

  ngOnInit(): void {
   this.getProd()
   this._router.navigate(['/products',this.prodArr[0].id])
  }
  getProd(){
     this._prodService.getAllProd()
      .subscribe({
        next : res =>{
          this.prodArr = res
        },
        error : err =>{
          console.log(err);
          
        }
      })
  }

}
