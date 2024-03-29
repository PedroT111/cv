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
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProjectSummaryComponent } from './components/project-summary/project-summary.component';
import { AdminToolsComponent } from './components/admin-tools/admin-tools.component';
import { PromotionalComponent } from './components/promotional/promotional.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessMsgComponent } from './components/success-msg/success-msg.component';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { environment } from 'src/environments/environment';
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
    MicafeappPageComponent,
    ContactFormComponent,
    ProjectSummaryComponent,
    AdminToolsComponent,
    PromotionalComponent,
    SuccessMsgComponent,
    ErrorMsgComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxGoogleAnalyticsModule.forRoot(environment.google_analytics_id),
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
