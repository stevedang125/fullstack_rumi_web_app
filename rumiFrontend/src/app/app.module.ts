import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import array:
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import array: (Messages)
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// declarations array:
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FriendsComponent } from './friends/friends.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { SettingComponent } from './setting/setting.component';
import { FilterPipe } from './services/filter.pipe';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

// provider array:
import { AuthService } from './services/auth.service'; 
import { ValidationService } from './services/validation.service';
import { LoginComponent } from './login/login.component';
import { GuardService } from './services/guard.service';
import { LoggedinguardService } from './services/loggedinguard.service';

// all the routes:
const appRoutes: Routes =[
  { path: '', component: HomeComponent },//home page  
  { path: 'register', component: RegisterComponent, canActivate: [LoggedinguardService] },
  { path: 'login', component: LoginComponent, canActivate: [LoggedinguardService] },
  { path: 'user/dashboard', component: DashboardComponent, canActivate: [GuardService]},// after logged in
  { path: 'user/friends', component: FriendsComponent, canActivate: [GuardService]},
  { path: 'user/transactions', component: TransactionsComponent, canActivate: [GuardService]},
  { path: 'user/receipts', component: ReceiptsComponent, canActivate: [GuardService]},
  { path: 'user/setting', component: SettingComponent, canActivate: [GuardService]},
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    FriendsComponent,
    TransactionsComponent,
    ReceiptsComponent,
    SettingComponent,
    FilterPipe,
    AboutComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, ValidationService, GuardService, LoggedinguardService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
