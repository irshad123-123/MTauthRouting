import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";




@Injectable({
    providedIn : 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{
    private _router  = inject(Router)
    private _auth = inject(AuthService)
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(this._auth.getToken()){
            return true
        }else{
            return this._router.createUrlTree([''])
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(this._auth.getToken()){
            return true
        }else{
            return this._router.createUrlTree([''])
        }
    }
}