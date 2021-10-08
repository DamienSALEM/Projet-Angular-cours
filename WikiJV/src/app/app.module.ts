import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';

import { ArticleComponent } from './article/article.component';
import { AddArticleComponent } from './add-article/add-article.component';

import { ArticleService } from './services/article.service';
import { ArticleViewComponent } from './article-view/article-view.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleArticleComponent } from './single-article/single-article.component';
import { SnoFoundComponent } from './sno-found/sno-found.component';
import { UpdateArticleComponent } from './update-article/update-article.component';

const appRoutes: Routes = [
  { path: 'articles', component: ArticleViewComponent },
  { path: 'articles/:id', component: SingleArticleComponent },
  { path: 'update', component: UpdateArticleComponent },
  { path: 'addArticle', component: AddArticleComponent },
  { path: '', component: ArticleViewComponent },
  { path: 'notfound', component: SnoFoundComponent },
  { path: '**', redirectTo: '/notfound' }
]

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    AddArticleComponent,
    ArticleComponent,
    ArticleViewComponent,
    SingleArticleComponent,
    SnoFoundComponent,
    UpdateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
