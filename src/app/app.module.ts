import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
//import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
//import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SigninComponent } from './components/signin/signin.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { WindowService } from './services/window.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    //DashboardComponent,
    ForgotPasswordComponent,
    //SignUpComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    LayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,  // Add this only in the root module
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
