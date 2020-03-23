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
import { ScoreManComponent } from './pages/score-man/score-man.component';
import { ClassManComponent } from './pages/class-man/class-man.component';
import {DynamicFormComponent} from './component/dynamic-form/dynamic-form.component';
import {DynamicFormQuestionComponent} from './component/dynamic-form/dynamic-form-question.component';
import {QuestionControlService} from './component/dynamic-form/question-control.service';
import {QuestionService} from './component/dynamic-form/question.service';
import {DynamicFormService} from './api/DynamicFormService';
import {AppShareModule} from './component/app-share.module';
import { StuListComponent } from './pages/stu-list/stu-list.component';

registerLocaleData(zh);

const myServices = [
  QuestionService,
  DynamicFormService,
]

@NgModule({
  declarations: [
    AppComponent,
    ScoreManComponent,
    ClassManComponent,
    StuListComponent,
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
