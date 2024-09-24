import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { MatCardModule } from '@angular/material/card';
import { ProjectComponent } from './components/project/project.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ArticleComponent } from './pages/article/article.component';
import { HttpClientModule } from '@angular/common/http';

const pages: Routes = [{
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
{
  path: 'article/:title',
  component: ArticleComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
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
    ArticlesPageComponent,
    AboutPageComponent,
    ProjectComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(pages), // Keep this
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
