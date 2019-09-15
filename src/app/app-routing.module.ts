import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminComponent } from './admin/admin.component';
import { GrammarComponent } from './home/grammar/grammar.component';
import { IndicativoPresenteComponent } from './home/grammar/indicativo-presente/indicativo-presente.component';
import { VocabularyComponent } from './home/vocabulary/vocabulary.component';
import { AddWordComponent } from './home/add-word/add-word.component';
import { WordsLearningComponent } from './components/words-learning/words-learning.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { permittedRoles: ['Admin', 'User'] },
    children: [
      {
        path: 'grammar', component: GrammarComponent,
        children: [
          { path: 'IndicativoPresente', component: IndicativoPresenteComponent }
        ]
      },
      {
        path: 'vocabulary', component: VocabularyComponent
      },
      { path: 'add-word', component: AddWordComponent, canActivate: [AuthGuard], data: { permittedRoles: ['Admin'] } },
      { path: 'learning', component: WordsLearningComponent}
    ]
  },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { permittedRoles: ['Admin'] } }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
