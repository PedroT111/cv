import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './components/ui/section/section.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { AboutComponent } from './components/about/about.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { WorkCardComponent } from './components/ui/work-card/work-card.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationCardComponent } from './components/ui/education-card/education-card.component';
import { SkillButtonComponent } from './components/ui/skill-button/skill-button.component';
import { ProjectCardComponent } from './components/ui/project-card/project-card.component';
import { HomeComponent } from './pages/home/home.component';
import { MicafeappPageComponent } from './pages/micafeapp-page/micafeapp-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    ProfileComponent,
    ButtonComponent,
    AboutComponent,
    WorkExperienceComponent,
    WorkCardComponent,
    EducationComponent,
    ProjectsComponent,
    EducationCardComponent,
    SkillButtonComponent,
    ProjectCardComponent,
    HomeComponent,
    MicafeappPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
