import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeDashboardComponent } from './shared/component/home-dashboard/home-dashboard.component';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { UsersDashboardComponent } from './shared/component/users-dashboard/users-dashboard.component';
import { ProuductsDashboardComponent } from './shared/component/prouducts-dashboard/prouducts-dashboard.component';
import { FairsDashboardComponent } from './shared/component/fairs-dashboard/fairs-dashboard.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { FairsDetailsComponent } from './shared/component/fairs-dashboard/fairs-details/fairs-details.component';
import { UsersCardComponent } from './shared/component/users-dashboard/users-card/users-card.component';
import { UsersFormComponent } from './shared/component/users-dashboard/users-form/users-form.component';
import { UsersDetailsComponent } from './shared/component/users-dashboard/users-details/users-details.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { ProductsDetailsComponent } from './shared/component/prouducts-dashboard/products-details/products-details.component';
import { ProductsFormComponent } from './shared/component/prouducts-dashboard/products-form/products-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    GetConfirmComponent,
    UsersDashboardComponent,
    ProuductsDashboardComponent,
    FairsDashboardComponent,
    NavbarComponent,
    FairsDetailsComponent,
    UsersCardComponent,
    UsersFormComponent,
    UsersDetailsComponent,
    AuthComponent,
    PageNotFoundComponent,
    ProductsDetailsComponent,
    ProductsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
