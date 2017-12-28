import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    SkillComponent,
    ExperienceComponent,
    EducationComponent,
    WorkComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path:"home",component:HomeComponent},
      { path:"about",component:AboutComponent},
      { path:"skill",component:SkillComponent},
      { path:"experience",component:ExperienceComponent},
      { path:"education",component:EducationComponent},
      { path:"work",component:WorkComponent},
      { path:"blog",component:BlogComponent},
      { path:"contact",component:ContactComponent},
      {path:"", redirectTo:"home",pathMatch:"full"}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
