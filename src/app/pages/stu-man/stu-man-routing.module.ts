import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StuManFormComponent} from './stu-man-form/stu-man-form.component';
import {StuManExcelComponent} from './stu-man-excel/stu-man-excel.component';
import {StuManComponent} from './stu-man.component';

const routes: Routes = [
  {
    path: '',
    component: StuManComponent,
    children: [
      {
        path: '',
        component: StuManFormComponent
      },
      {
        path: 'form',
        component: StuManFormComponent
      },
      {
        path: 'excel',
        component: StuManExcelComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StuManRoutingModule { }
