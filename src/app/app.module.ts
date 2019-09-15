import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ComponentsModule } from "./components/components.module";
import { GrammarComponent } from './home/grammar/grammar.component';
import { IndicativoPresenteComponent } from './home/grammar/indicativo-presente/indicativo-presente.component';
import { VocabularyComponent } from './home/vocabulary/vocabulary.component';
import { AddVerbComponent } from './home/add-verb/add-verb.component';
import { MatDialogModule, MatDialogRef, MatIconModule, MatToolbarModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    ForbiddenComponent,
    GrammarComponent,
    IndicativoPresenteComponent,
    VocabularyComponent,
    AddVerbComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    })
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  {provide: MatDialogRef, useValue: {}}],
  bootstrap: [AppComponent],
  entryComponents: [RegistrationComponent]
})
export class AppModule { }
