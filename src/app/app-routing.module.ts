import { SalesReportComponent } from './SalesReport/SalesReport.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './Create/Create.component';
import { DetailsComponent } from './Details/Details.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './Delete/Delete.component';
import { FetchAllComponent } from './FetchAll/FetchAll.component';
import { FetchAllUsingFilterComponent } from './FetchAllUsingFilter/FetchAllUsingFilter.component';
import { FethAllJoinComponent } from './FethAllJoin/FethAllJoin.component';
import { FetchAllUsingAssociationComponent } from './FetchAllUsingAssociation/FetchAllUsingAssociation.component';
import { LoginComponent } from './Login/Login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'create',component:CreateComponent,canActivate:[AuthGuard]},
  {path:'details',component:DetailsComponent,canActivate:[AuthGuard]},
  {path:'edit',component:EditComponent,canActivate:[AuthGuard]},
  {path:'delete',component:DeleteComponent,canActivate:[AuthGuard]},
  {path:'fetchall',component:FetchAllComponent,canActivate:[AuthGuard]},
  {path:'fetchAllFilter',component:FetchAllUsingFilterComponent,canActivate:[AuthGuard]},
  {path:'fetchAllJoin',component:FethAllJoinComponent,canActivate:[AuthGuard]},
  {path:'fetchAllAssociation',component:FetchAllUsingAssociationComponent,canActivate:[AuthGuard]},
  { path: 'edit/:id', component: EditComponent,canActivate:[AuthGuard]},
  {path:'delete/:id',component:DeleteComponent,canActivate:[AuthGuard]},
  {path:'details/:id',component:DetailsComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'salesreport',component:SalesReportComponent,canActivate:[AuthGuard]},
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', redirectTo: '/index' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
