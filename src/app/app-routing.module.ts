import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScoreManComponent} from './pages/score-man/score-man.component';
import {ClassManComponent} from './pages/class-man/class-man.component';
import {StuListComponent} from './pages/stu-list/stu-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/stu-man' },
  // { path: 'stu-man', loadChildren: './pages/stu-man/stu-man.module#StuManModule' },
  {
    path: 'stu-man',
    loadChildren: () => import('./pages/stu-man/stu-man.module').then(m => m.StuManModule)
  },
  { path: 'score-man', component: ScoreManComponent },
  { path: 'class-man', component: ClassManComponent },
  { path: 'stu-list', component: StuListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
