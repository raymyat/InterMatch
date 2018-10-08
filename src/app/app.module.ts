import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule,
  MatPaginatorModule, MatSidenavModule, MatListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingComponent } from './landing/landing.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
const routes: Routes=[
  {path: 'login', component: LogInComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: '', redirectTo: 'landing', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomepageComponent,
    LandingComponent,
    CompanyComponent,
    EmployeeComponent,
    MainNavComponent
  ],
  imports: [
    
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),//configure the router at routing level
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
