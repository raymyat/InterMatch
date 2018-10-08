import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ng6-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
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
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingComponent } from './landing/landing.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { WebsocketService } from './websocket.service';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
const routes: Routes=[
  {path: 'login', component: LogInComponent},
  {path: 'signup', component: SignUpComponent},
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
    SignUpComponent,
    HomepageComponent,
    LandingComponent,
    CompanyComponent,
    EmployeeComponent,
    MainNavComponent
  ],
  imports: [
    SocketIoModule.forRoot(config) ,
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
    WebsocketService,
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
