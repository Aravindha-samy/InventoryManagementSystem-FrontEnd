import { HostListener, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token=localStorage.getItem('token');
      if(token){
        return true; 
      }
    else{
      this.route.navigate(['/login'])
      return false;
    }
  }
  @HostListener('window:beforeunload')
  onBeforeUnload() {
    localStorage.removeItem('token');
  }
  
}
  