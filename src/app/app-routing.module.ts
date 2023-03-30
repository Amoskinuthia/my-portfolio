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
  data: { animation: 'about' }
},
{path: 'home',
component: HomeComponent,
data: { animation: 'home' }
},
{path: 'contacts',
component: ContactsComponent,
data: { animation: 'contacts' }
},
{
  path: 'projects',
  component: ProjectsComponent,
  data: { animation: 'projects' }
},
{
  path: 'articles',
  component: ArticlesComponent,
  data: { animation: 'articles' }
},
{
  path: 'skills',
  component: AboutComponent,
  data: { animation: 'skills' }
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
