import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatMenuModule, MatButtonModule, MatIconModule, MatToolbarModule, MatMenu, MatSidenavModule, MatListModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginService } from '../app/login.service';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FooterComponent } from './footer/footer.component';
import { MrnComponent } from './mrn/mrn.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    FooterComponent,
    MrnComponent,
    MainNavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    HttpModule,
    FormsModule,
    CommonModule,    
    LayoutModule,
    ToastrModule.forRoot(), 
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginformComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'mrn',
        component: MrnComponent
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
    ]),
    MatButtonModule,
    MatMenuModule,   
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule     
  ],
  exports: [MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {



}
