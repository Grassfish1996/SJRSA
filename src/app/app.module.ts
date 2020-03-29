import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {QuestionService} from './component/dynamic-form/question.service';
import {DynamicFormService} from './api/DynamicFormService';
import {AppShareModule} from './component/app-share.module';
import {StudentApi} from './api/student.api';
import { StuUpdateComponent } from './pages/student/stu-update/stu-update.component';
import { ScoreListComponent } from './pages/score/score-list/score-list.component';
import {StuListComponent} from './pages/student/stu-list/stu-list.component';
import { SubjectListComponent } from './pages/subject/subject-list/subject-list.component';
import {SubjectApi} from './api/subject.api';
import {ScoreApi} from './api/score.api';

registerLocaleData(zh);

const myServices = [
  QuestionService,
  DynamicFormService,
  StudentApi,
  SubjectApi,
  ScoreApi,
]

@NgModule({
  declarations: [
    AppComponent,
    StuListComponent,
    StuUpdateComponent,
    ScoreListComponent,
    SubjectListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppShareModule,
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    myServices,
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
