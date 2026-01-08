import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";




@Injectable({
    providedIn : 'root'
})
export class UserRoleGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let userRole : Array<string> = route.data['userRole']
        let loginIn : string = localStorage.getItem('userRole')!
        return userRole.includes(loginIn)
    }
}