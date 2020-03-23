import { Component } from '@angular/core';
import {QuestionService} from './component/dynamic-form/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;
}
