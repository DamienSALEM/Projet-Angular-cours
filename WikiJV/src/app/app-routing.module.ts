import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch:"full"},
  { path: "home", component: HomeComponent},
  { path: "about", component: AboutComponent},
  { path: "contacts", component: ContactsComponent},
  { path: "article", component: ArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

