import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/service/products.service';
import { SnackBarService } from 'src/app/shared/service/snack-bar.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  isInEditMode : boolean = false;
  editId ! : string
  @ViewChild('formRef') formRef ! : NgForm
  constructor(private _prodService : ProductsService,
              private _router : Router,
              private _uuid : UuidService,
              private _snackBar : SnackBarService,
              private _routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._routes.paramMap
      .subscribe(param =>{
        console.log(param);
        
        let id = param.get('id')!
        const url = this._router.url;
        console.log(url);
        
        this.editId = id
        if(id && url.includes('edit')){
          this._prodService.getSingleProd(id)
            .subscribe({
              next : res =>{
                this.isInEditMode = true
                setTimeout(()=>{
                  this.formRef.form.patchValue(res)
                },0)
              }
            })
        }
      })
  }
  onAddProd(){
    if(this.formRef.valid){
      let obj = {
        ...this.formRef.value,
        id : this._uuid.Uuid()
      }
      this._prodService.addProd(obj)
        .subscribe({
          next :res =>{
            this._snackBar.snackBar('The new product is added sucessfully!!!')
            this._router.navigate(['products'])
            this._routes.paramMap
              .subscribe(param=>{
                let id = param.get('id')!
                if(id){
                  this._prodService.getSingleProd(id)
                    .subscribe({
                      next : res =>{
                        this._router.navigate(['/products',id])
                      }
                    })
                }
              })
          },
          error : err =>{
            this._snackBar.snackBar(err)
          }
        })
    }
  }

  onUpdate(){
    let obj = {
      ...this.formRef.value,
      id : this.editId
    }
    this._prodService.updateProd(obj)
      .subscribe({
        next : res =>{
          this._snackBar.snackBar('Products is updated successfully!!!')
          this._router.navigate(['products', this.editId])
        }
      })
  }

}
