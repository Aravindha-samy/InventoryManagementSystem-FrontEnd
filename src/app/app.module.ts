import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './Create/Create.component';
import { DetailsComponent } from './Details/Details.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './Delete/Delete.component';
import { FetchAllComponent } from './FetchAll/FetchAll.component';
import { ProductServiceService } from './ProductService.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FetchAllUsingFilterComponent } from './FetchAllUsingFilter/FetchAllUsingFilter.component';
import { FetchAllUsingAssociationComponent } from './FetchAllUsingAssociation/FetchAllUsingAssociation.component';
import { FethAllJoinComponent } from './FethAllJoin/FethAllJoin.component';
import { LoginComponent } from './Login/Login.component';
import { SignupComponent } from './signup/signup.component';
import { SalesReportComponent } from './SalesReport/SalesReport.component';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [										
    AppComponent,
      IndexComponent,
      CreateComponent,
      DetailsComponent,
      EditComponent,
      DeleteComponent,
      FetchAllComponent,
      FetchAllUsingFilterComponent,
      FetchAllUsingAssociationComponent,
      FethAllJoinComponent,
      LoginComponent,
      SignupComponent,
      SalesReportComponent
   ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, 
    NgToastModule,
    HttpClientModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
