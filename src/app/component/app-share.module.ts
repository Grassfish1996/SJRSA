import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {DynamicFormQuestionComponent} from './dynamic-form/dynamic-form-question.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const coms = [
  DynamicFormComponent,
  DynamicFormQuestionComponent,
]

@NgModule({
  declarations: [
    coms
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    coms
  ]
})
export class AppShareModule { }
