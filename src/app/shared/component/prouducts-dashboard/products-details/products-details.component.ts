import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iprod } from 'src/app/shared/model/prod';
import { ProductsService } from 'src/app/shared/service/products.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { SnackBarService } from 'src/app/shared/service/snack-bar.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  prodObj ! : Iprod
  constructor(private _routes : ActivatedRoute,
            private _prodService : ProductsService,
            private _dialog : MatDialog,
            private _router : Router,
            private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
    this._routes.paramMap
      .subscribe(param =>{
        let id = param.get('id')
        if(id){
          this._prodService.getSingleProd(id)
            .subscribe({
              next : res =>{
                this.prodObj = res
              },
              error :err =>{
                console.log(err)
                
              }
            })
        }
      })
  }
  onRemove(){
    let dialogConfi = new MatDialogConfig()
    dialogConfi.data = `Are you sure want to remove this product with id ${this.prodObj.id}`
    dialogConfi.disableClose = true
    let dialogRef = this._dialog.open(GetConfirmComponent,dialogConfi)
    dialogRef.afterClosed()
      .subscribe({
        next : res =>{
          if(res){
            this._prodService.removeProd(this.prodObj.id)
            this._snackBar.snackBar('Product is removed successfully !!!')
            this._prodService.nextProd(this.prodObj.id)
              .subscribe({
                next : res =>{
                  console.log(res);
                  this._router.navigate(['products',res.id])
                }
              })
          }
        },
        error : err =>console.log(err)
        
      })      
  }

  
}
