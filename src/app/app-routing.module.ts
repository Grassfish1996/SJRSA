import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StuUpdateComponent} from './pages/student/stu-update/stu-update.component';
import {StuListComponent} from './pages/student/stu-list/stu-list.component';
import {ScoreListComponent} from './pages/score/score-list/score-list.component';
import {SubjectListComponent} from './pages/subject/subject-list/subject-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/stu-list' },
  // { path: 'stu-add', loadChildren: './pages/stu-add/stu-add.module#StuManModule' },
  {
    path: 'stu-add',
    loadChildren: () => import('./pages/student/stu-add/stu-man.module').then(m => m.StuManModule)
  },
  { path: 'score-list', component: ScoreListComponent },
  { path: 'subject-list', component: SubjectListComponent },
  { path: 'stu-list', component: StuListComponent },
  { path: 'stu-update', component: StuUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
