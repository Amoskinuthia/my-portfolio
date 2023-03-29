import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'about',
  component: AboutComponent,
},
{path: 'home',
component: HomeComponent,
},
{path: 'contacts',
component: ContactsComponent,
},
{
  path: 'projects',
  component: ProjectsComponent,
},
{
  path: 'articles',
  component: ArticlesComponent,
},
{
  path: 'skills',
  component: AboutComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
