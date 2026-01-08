import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './shared/component/home-dashboard/home-dashboard.component';
import { ProuductsDashboardComponent } from './shared/component/prouducts-dashboard/prouducts-dashboard.component';
import { UsersDashboardComponent } from './shared/component/users-dashboard/users-dashboard.component';
import { FairsDashboardComponent } from './shared/component/fairs-dashboard/fairs-dashboard.component';
import { FairsDetailsComponent } from './shared/component/fairs-dashboard/fairs-details/fairs-details.component';
import { UsersCardComponent } from './shared/component/users-dashboard/users-card/users-card.component';
import { UsersDetailsComponent } from './shared/component/users-dashboard/users-details/users-details.component';
import { UsersFormComponent } from './shared/component/users-dashboard/users-form/users-form.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/service/auth.guard';
import { ProductsDetailsComponent } from './shared/component/prouducts-dashboard/products-details/products-details.component';
import { UserRoleGuard } from './shared/service/userRole.gaurd';
import { ProductsFormComponent } from './shared/component/prouducts-dashboard/products-form/products-form.component';

const routes: Routes = [
  {
    path : '',
    component : AuthComponent
  },
  {
    path : 'home',
    component : HomeDashboardComponent
  },
  {
    path : 'products',
    component : ProuductsDashboardComponent,
    canActivate : [UserRoleGuard],
    data : {
      userRole : ['superAdmin','admin']
    },
    children : [
      {
        path : 'addProd/:id',
        component : ProductsFormComponent
      },
      {
        path : ':id/edit',
        component : ProductsFormComponent
      },
      {
        path : ':id',
        component : ProductsDetailsComponent
      }
    ]
  },
  {
    path : 'users',
    component : UsersDashboardComponent,
    canActivateChild : [AuthGuard],
    children :[
      {
        path : 'addUser',
        component : UsersFormComponent
      },
      {
        path : ':id/edit',
        component : UsersFormComponent
      },
       {
        path : ':id',
        component : UsersDetailsComponent
      }
    ]
  },
  {
    path : 'fairs',
    component : FairsDashboardComponent,
    canActivate : [AuthGuard],
    children : [
      {
        path : ':id',
        component : FairsDetailsComponent
      }
    ]
  },
  {
    path : 'page-not-found',
    component : PageNotFoundComponent
  },
  // {
  //   path : '**',
  //   redirectTo : 'page-not-found'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
