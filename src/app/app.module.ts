import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { MatCardModule } from '@angular/material/card';
import { ProjectComponent } from './components/project/project.component';

const pages = [{
  path: '',
  component: HomePageComponent
}, {
  path: 'projects',
  component: ProjectsPageComponent
},
{
  path: 'projects/:id',
  component: ProjectComponent
},
{
  path: 'about',
  component: AboutPageComponent
},
{
  path: 'article',
  component: ArticlesPageComponent
},
{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProjectsPageComponent,
    HomePageComponent,
    DarkModeToggleComponent,
    AboutPageComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(pages),
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
