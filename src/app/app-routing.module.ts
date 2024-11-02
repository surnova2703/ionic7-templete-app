import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component'
import { NotesComponent } from './notes/notes.component'
import { ContactCardComponent } from './contact-card/contact-card.component';
import { CardEditComponent } from './contact-card/card-edit/card-edit.component';
import { SettingsComponent } from "./settings/settings.component"
import { TodoListComponent } from './todo-list/todo-list.component';
import {LoginPageModule } from "./login/login.module"
import { FashionComponent } from './fashion/fashion.component';
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { SignupComponent } from './signup/signup.component';
import { IntroComponent } from './intro/intro.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RssDataComponent } from './rss-data/rss-data.component';
import {BarcodeScannerComponent} from './barcode-scanner/barcode-scanner.component';
import {RecipesPageModule} from './recipes/recipes.module'
import { TermsOfServiceComponent } from "./terms-of-service/terms-of-service.component"

import {DealsComponent} from './deals/deals.component';

import { Component } from '@angular/core';
import {UserComponent} from "./user/user.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundPageModule)

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'contact-card',
    component: ContactCardComponent
  },
  {
    path: 'contact-edit',
    component: CardEditComponent
  },
  {
    path: 'deals',
    component: DealsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule)
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {  
    path:'user',
    component: UserComponent
  },
  // Добавляем путь в роутинг для перемещения на страницу пометок
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesPageModule)
  },
  {
    path: 'todo-list',
    component: TodoListComponent
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'fashion',
    component: FashionComponent
  },
  {
    path: 'filters',
    loadChildren: () => import('./forms/filters/filters.module').then(m => m.FiltersPageModule)
  },
  {
    path: 'validations',
    loadChildren: () => import('./forms/validations/validations.module').then(m => m.ValidationsPageModule)
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'terms-of-service',
    component: TermsOfServiceComponent
  },
  {
    path: 'barcode-scanner',
    component: BarcodeScannerComponent
  },
  {
    path: 'contact-card',
    component: ContactCardComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password-routing.module').then( m => m.ForgotPasswordPageRoutingModule)
  },
  {
    path: 'rss-data',
    component: RssDataComponent
  },
  { path: 'intro',
  component: IntroComponent
},
  {
    path: 'owerview',
    loadChildren: () => import('./owerview/owerview.module').then( m => m.OwerviewPageModule)
  },
  {
    path: '**',
  redirectTo: 'page-not-found'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
