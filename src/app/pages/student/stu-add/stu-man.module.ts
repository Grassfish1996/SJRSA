import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StuManRoutingModule } from './stu-man-routing.module';
import {StuManFormComponent} from './stu-man-form/stu-man-form.component';
import {StuManExcelComponent} from './stu-man-excel/stu-man-excel.component';
import { StuManComponent } from './stu-man.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppShareModule} from '../../../component/app-share.module';


@NgModule({
  declarations: [
    StuManFormComponent,
    StuManExcelComponent,
    StuManComponent,
  ],
  imports: [
    CommonModule,
    StuManRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    AppShareModule
  ],
  providers: [
    FormBuilder,
  ]
})
export class StuManModule { }
